// webpack node 使用该文件，模块定义遵照CommonJS规范
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const chalk = require('chalk');
const chokidar = require('chokidar');

// 当前Mock.setup仅支持配置Ajax请求，对于当前mock-server模式不适用
const Mock = require('mockjs');
const mockDir = path.join(__dirname, 'mocks');

// 清除require缓存，重新加载变化后内容
const cleanRequireCache = (filepath) => {
  const search = filepath ? filepath : mockDir;
  Object.keys(require.cache).filter(
    k => k.includes(path.join(mockDir, 'index.js')) || k.includes(search)
  ).forEach(
    k => delete require.cache[k]
  );
}

const now = () => new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

module.exports = (app/*, server, compiler*/) => {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  // 暂不考虑支持multipart/form-data

  // 普通路由
  app.get('/api/test1', (req, res) => res.send("API Test1"));
  app.get('/api/test1', (req, res) => res.send("API Test2"));
  app.get('/mock/test1', (req, res) => res.send("Mock Test1"));
  app.get('/mock/test1', (req, res) => res.send("Mock Test2"));

  // 定义mock动态路由
  let mockRouter;
  const defineMockRouter = () => {
    mockRouter = express.Router()
    // 结合Mock.js定义的路由
    require('./mocks').forEach(mock => {
      const method = mock.method ? mock.method.toLowerCase() : 'get';
      // '/mock' 根路径在父级app中定义，此处需替换为空
      mockRouter[method](mock.url.replace(/^\/mock/, ''), (req, res) => {
        if (mock.response instanceof Function) {
          const options = {
            url: req.originalUrl,
            type: req.method,
            body: req.body,
            query: req.query
          };
          console.log(chalk.blue('[' + now() + '] Mock Server received request: '), options);
          res.json(Mock.mock(mock.response(options)));
        } else {
          res.json(Mock.mock(mock.response));
        }
      });
    });
  };
  defineMockRouter();

  app.use('/mock', (req, res, next) => mockRouter(req, res, next));

  // Hot reload mocks data
  chokidar.watch(mockDir, {ignoreInitial: true})
    .on('all', (event, filepath) => {
      if (event === 'change' || event === 'add') {
        cleanRequireCache(filepath);
        defineMockRouter();
        console.log(chalk.blue('[' + now() + '] Mock Server Hot reload mocks data from ' + filepath));
      }
    });
}
