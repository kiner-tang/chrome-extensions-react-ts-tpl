const {
    override,
    addDecoratorsLegacy
} = require('customize-cra');
const { resolve } = require("path");

module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    (config) => {
        // config.resolve.alias["react"] = resolve('./node_modules/react');
        
        return config;
    }
)