var chalk = require('chalk')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var defaults = {
    host: 'localhost',
    port: 8081
}

module.exports = function(config, opts) {
    var server
    var options = Object.assign(defaults, opts)
    var compiler = webpack(Object.assign({}, config))

    function process(files, metalsmith, done) {

        // Prevent from starting webpack dev server multiple times
        if (server) {
            done()
            return
        }

        server = new WebpackDevServer(compiler, options)

        server.listen(options.port || 8081, "localhost", function() {
            console.log(
                chalk.blue('[metalsmith-webpack-dev-server]: ') +
                chalk.green("Running webpack dev server at http://" + options.host + ":" + options.port)
            )
            done()
        })
    }

    return process
}

