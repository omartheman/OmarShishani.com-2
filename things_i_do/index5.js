//README: index5 will create the template for my articles page.  

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority',
{ dbName: 'omar_database',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.log('ERROR:', err.message);
});

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Post = mongoose.model('Post', PostSchema);

const articleSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  link: String,
  imageFilePath: String,
}, {collection: 'articles'});

const Article = mongoose.model('Article', articleSchema);

const article2 = new Article({_id: 3, name: 'Article 3', link: 'www.omarshishani.com', imageFilePath: 'thumbnails/image.png'});

app.get('/', async (req, res) => {
  // article2.save(function (err, book) {
  //   if (err) return console.log(err);
  //   console.log(book.name + 'saved to collection');
  // }); 

  // articles.find({}, function(err, profile){
    // res.send(profile);
  // });

  let article = await Article.find({}, function(err, profile){
    res.send(profile);
  });
});

app.get('/articles', (req, res) => {
  let article = Article.find({}, function(err, articles){
    res.render('articles2.ejs', {articles: articles});
  });
});

app.listen(3000, () => { 
  console.log('Server is listening on port 3000') 
});