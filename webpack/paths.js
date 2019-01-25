const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    dist: path.resolve(CURRENT_WORKING_DIR, 'dist'),
    packages: path.resolve(CURRENT_WORKING_DIR, 'packages'),
    examples: path.resolve(CURRENT_WORKING_DIR, 'examples'),
    modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
};
