const mocks = [
  {
    url: '/api/listC1',
    method: 'get',
    response: [1, 2, 3, 4, 5, 6, 7, 8]
  }, {
    url: '/api/listC2',
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
      url: '/api/listC3',
      method: 'get',
      response: (response) => {
        return '';
      }
    }]
  }
];

module.exports = mocks;
