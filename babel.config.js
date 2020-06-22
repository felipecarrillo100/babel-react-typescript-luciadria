const plugins = [
    "@babel/plugin-proposal-class-properties"
];

if (process.env.NODE_ENV !== 'production') {
    console.log("babel.config.js: " +  "production mode")
    plugins.push('babel-plugin-typescript-to-proptypes');
}

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins
};
