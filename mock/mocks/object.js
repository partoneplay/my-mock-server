module.exports = [{
  url: '/api/object',
  method: 'get',
  response: {
    'object1|2': {
      '310000': '上海市',
      '320000': '江苏省',
      '330000': '浙江省',
      '340000': '安徽省'
    }, // 随机选取2个属性
    'object2|2-4': {
      '110000': '北京市',
      '120000': '天津市',
      '130000': '河北省',
      '140000': '⼭⻄省'
    }, // 随机选取2-4个属性
  }
}];