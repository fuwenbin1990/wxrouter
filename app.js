// console.log('hello node')
// var express = require('express');

// var swig = require('swig');

// var control = require('./control/control.js');





// app.engine('html', swig.renderFile);

// app.set('view engine','html');

// swig.setDefaults({cache: false});

// app.set('view cache', false);





// var app = express();

// control(app);

// app.listen(process.env.PORT || 8866);
var express = require('express');
var swig = require('swig');
var path = require('path');

var app = express();
var port = process.env.PORT || 8888;

var control = require('./control/control.js');

//设置swig页面不缓存
swig.setDefaults({
  cache: false
});
app.set('view cache', false);

app.set('views','./views/');
app.set('view engine','html');
app.engine('html', swig.renderFile);

app.use(express.static('./public/'));

control(app);
app.listen(port);
