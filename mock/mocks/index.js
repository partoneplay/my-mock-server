const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const dealAllFiles = (dir, callback) => {
  fs.readdirSync(dir).forEach(filename => {
    if (filename === 'index.js') {
      return;
    }
    const filepath = path.join(dir, filename);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      dealAllFiles(filepath, callback);
    } else if (stat.isFile()) {
      callback(filepath);
    } else {
      console.error(chalk.red('unknown file ' + filepath));
    }
  });
};

const mocks = [];
dealAllFiles(__dirname, filepath => {
  const mockData = require(filepath);
  if (mockData instanceof Array) {
    mocks.push(...require(filepath));
  } else {
    console.error(chalk.red('Invalid mock file ' + filepath + '. Array expected'));
  }
});

// mocks配置的url和实际需要的url保持一致，不用考虑代理问题
module.exports = mocks.map(mock => {
  return {
    ...mock,
    url: mock.url.replace(/^\/api/, '/mock') // 和devServer proxy 配置保持一致
  }
});
