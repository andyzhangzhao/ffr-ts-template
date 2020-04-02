const path = require('path');
const buildLib = require('@sf/ffr-core/es/scripts/build');
const analyze = require('@sf/ffr-core/es/scripts/analyze');

const configPath = path.join(__dirname, '../config');

const param = process.argv.slice(-1)[0];

if (param === 'analyze') {
  analyze(configPath);
} else {
  buildLib(configPath, param === 'ci');
}
