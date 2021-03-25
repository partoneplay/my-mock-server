module.exports = [{
  url: '/api/number',
  method: 'get',
  response: {
    'number1|+1': 200, // 自动+1
    'number2|1-100': 100, // 范围1-100
    'number3|1-100.2-4': 1, // 整数部分范围1-100，2-4位小数
    'number4|123.1-9': 1, // 整数部分固定123，1-9位小数
    'number5|123.2': 1, // 整数部分固定123，2位小数
  }
}];
