module.exports = [{
  url: '/api/path',
  method: 'get',
  response: {
    'foo': 'Hello',
    'nested': {
      'a': {
        'b': {
          'c': 'Mock.js'
        }
      }
    },
    'absolutePath': '@/foo @/nested/a/b/c',
    'relativePath': {
      'a': {
        'b': {
          'c': '@../../../foo @../../../nested/a/b/c'
        }
      }
    },
  }
}];
