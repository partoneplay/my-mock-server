module.exports = [{
  url: '/api/boolean',
  method: 'get',
  response: {
    'boolean1|1': true, // 等概率生成一个boolean值
    'boolean2|1-5': true, // true:false的概率为1:5
    'boolean3|2-3': false, // false:true的概率为2:3
  }
}];
