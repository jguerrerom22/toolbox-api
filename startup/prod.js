const helmet = require('helmet');
const compression = require('compression');

module.exports = function(app){
    app.use(helmet());
    app.use(compression());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", 'Origin,Content-Type,Accept,content-type,application/json,X-Auth-Token,Visitor-Id');
        next();
    });
}