const path = require('path');
const e2e = require('@sf/ffr-core/es/scripts/e2e');

const configPath = path.join(process.cwd(), 'config');
e2e(configPath);
