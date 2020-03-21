const bodyParser   = require('body-parser'),
express            = require('express'),
app                = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
  res.render('index');
});

app.get("/things_i_do", function(req, res){
  res.render('index.ejs');
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log('Server is running on port 3000');
});