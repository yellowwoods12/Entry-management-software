var express    = require("express");
var login = require('./routes/loginRoutes');
var bodyParser = require('body-parser');
var cors = require('cors');



var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});//route to handle user registration
router.post('/user',login.register);
router.post('/login',login.login);
router.post('/checkout',login.checkout);
app.use('/api', router);
app.listen(5000);
//var login = require('./routes/loginroutes');
