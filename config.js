exports.sessionSecret = 'JustSomeRandomString';


exports.dazzle = {
  'home': '/home/storage',
  'user': 'storage',
  'group': 'storage',
  'bin': '/usr/local/bin/dazzle.sh'
}

exports.listen = {
  port: 3000,
  host: null
};

exports.https = {
  enabled: false,
  key: '/path/to/private.key',
  cert: '/path/to/cert.crt'
};

exports.basepath = '';
exports.externalUrl = null;

// 300 sec
exports.linkCodeValidFor = 300;

// none | min | info | debug
exports.logging = 'none';

exports.fanout = {
  enabled: false,
  host: null,
  port: 1986
};

exports.backend = {
  'git': {
    'bin': 'git'
  }
};
