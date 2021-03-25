module.exports = [{
  url: '/api/function',
  method: 'get',
  response: (options) => {
    // options 请求参数，包含url、type、body三个属性
    return {
      ...options,
      'cname': '@cname',
    };
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
