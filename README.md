### My Mock Server

* 支持`Mock.js`定义模拟数据
* 配置devServer代理，对`/api`的访问，将被代理到`/mock`
* 全部mock数据在mock/mocks文件夹下定义，可随意嵌套子文件夹
* 监控mock/mocks文件变化，自动加载变化内容
* 响应格式为JSON格式
* 暂不支持contente-type为`multipart/form-data`的请求

mocks文件定义模板

```js
module.exports = [{
  url: '/api/string',
  method: 'get',
  response: {
    'string1|2-10': 'X', // 重复2-10次'X'
    'string2|3': '*', // 重复'*'3次
  }
}, {
  url: '/api/function',
  method: 'post',
  response: (options) => {
    // options 请求参数，包含url、type、body三个属性
    return {
      ...options,
      'name': '@name',
    };
  }
}];
```
