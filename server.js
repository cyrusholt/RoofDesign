var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport')
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
 secret: 'footballisawesome',
 resave: false,
 savUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

var InvoiceCtrl = require('./controllers/InvoiceCtrl');

// var NewInvoice = require('./models/NewInvoice');

var mongoUri = "mongodb://localhost:27017/roofInvoice";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log("Connected on " + mongoUri);
});

var port = 9000;


app.listen(port, function(){
	console.log("Roof is not falling on ", port);
});

app.use(express.static(__dirname + "/public"));

app.post('/api/newinvoice', InvoiceCtrl.create);

app.get('/api/getinvoice', InvoiceCtrl.read);