const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = Express();
const CONNECTION_URL = "mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "articles";


const articles = [
  { id: '001',
    name: 'CSS Smooth Transitions',
    url: 'https://medium.com/@omarshishanischool/css-animations-smooth-change-from-100-to-0-b578bc33a643'
  }
];

app.set('view engine', 'ejs');
app.use(Express.static('public'));
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.render('index');
});

app.get("/things_i_do", function(req, res){
  res.render('things_i_do.ejs');
});

app.get("/articles", function(req, res){
  res.render('articles', {articles: articles});
});

app.listen(process.env.PORT || 5000, process.env.IP, function(){
  console.log('Server is running on port 3000');
});