const { version } = require('../package.json');
// const ethereum = require('./tokens/ethereum.json');
const ubiq = require('./tokens/ubiq.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Default List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'keywords': [
      'ubiq',
      'default'
    ],
    tokens: [
      // ...ethereum,
      ...ubiq
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
