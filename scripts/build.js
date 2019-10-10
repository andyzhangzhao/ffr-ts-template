const path = require('path');
const buildLib = require('@sf/ffr-core/es/scripts/build');

const configPath = path.join(__dirname, '../config');
const isReleaseBuild = process.argv.slice(-1)[0] === 'ci';

buildLib(configPath, isReleaseBuild);
