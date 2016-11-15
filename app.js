var express = require('express');
var multer = require('multer');

var app = express();

app.set('port', (process.env.PORT||3000));

var routes = require('./controllers/route');
app.set('view engine','pug');
app.set('views','./views');

app.use('/', routes);

app.listen(app.get('port'),function(){
  console.log('Listening on: '+ app.get('port'));
});
