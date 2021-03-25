module.exports = [{
  url: '/api/array',
  method: 'get',
  response: {
    'array1|1': [
      'AMD',
      'CMD',
      'UMD'
    ], // 随机选取1个值作为结果
    'array2|+1': [
      'AMD',
      'CMD',
      'UMD'
    ], // 顺序选取1个值作为结果
    'array3|1-10': [
      'Hello',
      'Mock.js',
      '!'
    ], // 重复数组1-10次生成新的数组
    'array4|3': [
      'Hello',
      'Mock.js',
      '!'
    ], // 重复数组2次生成新的数组
  }
}];
