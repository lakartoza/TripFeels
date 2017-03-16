const Server = require('./server.js')
const path = require('path')
const port = (process.env.PORT || 3001)
const mongodb_uri = "mongodb://heroku_k9s39t5d:bojk81j26f6esq82no9vua0lsv@ds131890.mlab.com:31890/heroku_k9s39t5d"
const app = Server.app()


console.log(mongodb_uri)

// if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: '/'
  }))
// }

app.listen(port)
  console.log(`Listening at http://localhost:${port}`)


