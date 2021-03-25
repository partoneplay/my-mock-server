const mocks = [
  {
    url: '/api/listA1',
    method: 'get',
    response: {
      'string|1-10': '*',
      'number|1-100': 100,
      'number|10-100.0-20': 100,
      'boolean|0-1': true,
      'boolean|1-2': true
    }
  }, {
    url: '/api/listA2',
    method: 'get',
    response: [{
      userId: 1, userName: 'A'
    }, {
      userId: 2, userName: 'B'
    }, {
      userId: 3, userName: 'C'
    }, {
      userId: 4, userName: 'D'
    }, {
      userId: 5, userName: 'E'
    }, {
      url: '/api/listA3',
      method: 'get',
      response: (response) => {
        return '';
      }
    }]
  }
];

module.exports = mocks;
