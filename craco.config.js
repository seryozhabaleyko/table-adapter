const path = require('path');
const tsConfigPaths = require('../tsconfig.aliases.json').compilerOptions.paths;

const root = path.resolve(__dirname, '..');

module.exports = {
    webpack: {
        alias: Object.keys(tsConfigPaths).reduce((alias, key) => {
            const [value] = tsConfigPaths[key];
            alias[key] = path.resolve(root, value);
            return alias;
        }, {}),
    },
}
