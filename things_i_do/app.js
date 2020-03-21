const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoose = require('mongoose');

const CONNECTION_URL = "mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "articles";

var app = Express();

var uri = 'mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority';

var db = mongoose.connect(uri).catch((error) => { console.log(error); });

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.post("/person", (request, response) => {
  collection.insert(request.body, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  });
});

app.get("/people", (request, response) => {
  collection.find({}).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});

// const articles = [
//   { id: '001',
//     name: 'CSS Smooth Transitions',
//     url: 'https://medium.com/@omarshishanischool/css-animations-smooth-change-from-100-to-0-b578bc33a643'
//   }
// ];

// //APP CONFIG
// mongoose.connect('mongodb+srv://omarnaod:3yeDroplets%21@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(Express.static('public'));
app.use(BodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
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

//Adding new article
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

app.listen(process.env.PORT || 5000, process.env.IP, function(){
  console.log('Server is running on port 3000');
});