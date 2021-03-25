module.exports = [{
  url: '/api/regexp', // 可反向生成匹配的字符串
  method: 'get',
  response: {
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\w\W\s\S\d\D/,
    'regexp3': /\d{5,10}/,
    'regexp4|3': /\d{5,10}-/, // 重复生成3次拼接
    'regexp5|1-5': /\d{5,10}-/, // 重复生成1-5次拼接
    'chinese': /^[\u4e00-\u9fa5]+/, // 中文，显示乱码
    'phone': /^[1][34578][0-9]{9}$/, // 手机号
    'IDCard': /^(\d{15})$|^(\d{17})(\d|X)$/, // 身份证号
    'SocialCreditCode': /^[0-9A-HJ-NPQRTUWXY]{18}$/, // 同一社会信用代码
  }
}];
