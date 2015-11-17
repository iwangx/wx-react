/**
 * Created by wangxing on 2015/11/16.
 */
var express=require("express");
var path=require("path");
var routes = require('./router.js');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'html'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
routes(app);
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});