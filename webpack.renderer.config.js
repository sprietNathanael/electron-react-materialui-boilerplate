const rules = require('./webpack.rules');
const pathUtils = require('path');

rules.push({
	test: /\.css$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
	// Put your normal webpack config below here
	module: {
		rules,
	},
	resolve: {
		modules: [pathUtils.resolve(__dirname, 'src/client'), 'node_modules'],
	},
};
