//README: In index2, we are trying to call data from the database using .find

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

app.get('/', async (req, res) => {
  let post = await Post.create({title: 'Test', description: 'This is a test also'});
  // let article = await Article.create({_id: 55, name: 'Article 55'}); 
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