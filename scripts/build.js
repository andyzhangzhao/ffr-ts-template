const path = require('path');
const buildLib = require('@sf/ffr-core/es/scripts/build');
const analyze = require('@sf/ffr-core/es/scripts/analyze');

const configPath = path.join(__dirname, '../config');
// eslint-disable-next-line import/no-dynamic-require
require(`${configPath}/env`); // initialize PUBLIC_URL
const param = process.argv.slice(-1)[0];

if (param === 'analyze') {
  analyze(configPath);
} else {
  buildLib(configPath, param === 'ci');
}
