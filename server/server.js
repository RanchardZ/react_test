var express = require('express');
var path = require("path");
var config = require("../webpack.config.js");
var router = express.Router();
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var app = express();


var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: false, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static("./out"));

router.get('/', function(req, res, next) {
	res.sendFile(path.resolve('index.html'));
});


app.use('/', router);

var port = 5015;

app.listen(port, function(error) {
	if (error) throw error;
		console.log("Express server listening on port", port);
})
