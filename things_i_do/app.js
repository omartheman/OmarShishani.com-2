const bodyParser   = require('body-parser'),
express            = require('express'),
mongoose           = require('mongoose'),
app                = express();

//APP CONFIG
mongoose.connect('mongodb://localhost/omar_shishani_database');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
const articleSchema = new mongoose.Schema({
  title: String,
  image: String, 
  body: String, 
  created: {type: Date, default: Date.now},
});
const Article = mongoose.model('Article', articleSchema);

app.get('/', function(req, res){
  res.render('index');
});

app.get("/things_i_do", function(req, res){
  res.render('things_i_do.ejs');
});

app.get("/articles", function(req, res){
  res.render('articles.ejs');
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log('Server is running on port 3000');
});