const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../webpack.config');
const api = require('./server/api');

const app = express();

app.set('views', path.join(process.cwd(), 'src','client'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const router = express.Router();

const compiler = webpack(config);

// use env for producttion
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));
// app.use(require("webpack-hot-middleware")(compiler));

// app.use(webpackHotMiddleware(compiler, {
//     log: console.log
// }));
// app.use(require("webpack-dev-middleware")(compiler, {
//   noInfo: true, publicPath: config.output.publicPath
// }));
app.use(require("webpack-hot-middleware")(compiler, {
  log: false,
  path: "/__what",
  heartbeat: 2000
}));

router.get('/', (req, res, next) => res.render('index'));

app.use(router);
app.use('/api',api);

app.listen(3000, () => console.log('listening on 3000'));