//README: index3.js is for trying to add a peice of data to the articles collection. 
//++ Successfully saved new article to existing article collection, and posted both articles on localhost: 3000

const express = require('express');
const mongoose = require('mongoose');
const app = express();

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
  name: String
}, {collection: 'articles'});

const Article = mongoose.model('Article', articleSchema);

const article2 = new Article({_id: 222, name: 'The second article is born!'});

app.get('/', async (req, res) => {
  // let post = await Post.create({title: 'Test', description: 'This is a test also'});
  article2.save(function (err, book) {
    if (err) return console.log(err);
    console.log(book.name + 'saved to collection');
  }); 
  // articles.find({}, function(err, profile){
    // res.send(profile);
  // });
  let article = await Article.find({}, function(err, profile){
    res.send(profile);
  });

  // res.send(article);
  // res.send(post);
  // res.send('Is this thing on?')
});

app.listen(3000, () => { 
  console.log('Server is listening on port 3000') 
});