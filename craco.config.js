const path = require('path');

const tsConfigPaths = require('./tsconfig.aliases.json').compilerOptions.paths;

module.exports = {
    webpack: {
        alias: Object.keys(tsConfigPaths).reduce((alias, key) => {
            const [value] = tsConfigPaths[key];
            alias[key] = path.resolve(__dirname, value)
            return alias;
        }, {}),
    },
}
