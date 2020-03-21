const bodyParser   = require('body-parser'),
express            = require('express'),
mongoose           = require('mongoose'),
app                = express();

const articles = [
  { id: '001',
    name: 'CSS Smooth Transitions',
    url: 'https://medium.com/@omarshishanischool/css-animations-smooth-change-from-100-to-0-b578bc33a643'
  }
];

// //APP CONFIG
// mongoose.connect('mongodb://localhost:27017/database_omar', { useUnifiedTopology: true, useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// //MONGOOSE/MODEL CONFIG
// const articleSchema = new mongoose.Schema({
//   _id: Number,
//   name: String,
//   url: String,
//   title: String,
//   image: String, 
//   body: String, 
//   created: {type: Date, default: Date.now},
// });
// const Article = mongoose.model('Article', articleSchema);

// //Adding new article
// let smooth_animations = new Article({
//   _id: '1',
//   name: 'CSS Smooth Animations',
//   url: 'https://medium.com/@omarshishanischool/css-animations-smooth-change-from-100-to-0-b578bc33a643',
//   title: 'CSS Animations: Smooth change from 100% to 0%',
//   image: '',
//   body: '',
// });

// smooth_animations.save(function(err, article){
//   if (err) {
//     console.log('something went wrong')
//     console.log(err);
//   } else {
//     console.log('we just saved an article to the db');
//     console.log(article);
//   }
// });


app.get('/', function(req, res){
  res.render('index');
});

app.get("/things_i_do", function(req, res){
  res.render('things_i_do.ejs');
});

app.get("/articles", function(req, res){
  res.render('articles', {articles: articles});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log('Server is running on port 3000');
});