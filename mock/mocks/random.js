module.exports = [{
  url: '/api/random',
  method: 'get',
  response: {
    // name
    'string': '@string',
    'chinese first': '@cfirst',
    'chinese last': '@clast',
    'chinese name': '@cname',
    'first name': '@first',
    'last name': '@last',
    'english name': '@name',
    // date
    'date': '@date',
    'time': '@time',
    'datetime': '@datetime',
    'now': '@now',
    // color
    'color': '@color',
    'hex': '@hex',
    'rgb': '@rgb',
    'rgba': '@rgba',
    'hsl': '@hsl',
    // text
    'paragraph': '@paragraph',
    'cparagraph': '@cparagraph',
    'sentence': '@sentence',
    'csentence': '@csentence',
    'word': '@word',
    'cword': '@cword',
    'title': '@title',
    'ctitle': '@ctitle',
    // web
    'url': '@url',
    'protocol': '@protocol',
    'domain': '@domain',
    'tld': '@tld',
    'email': '@email',
    'ip': '@ip',
    // address
    'region': '@region',
    'province': '@province',
    'city': '@city',
    'county': '@county',
    'zip': '@zip',
    // id card
    'id card': '@id'
  }
}];
