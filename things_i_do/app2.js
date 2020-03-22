const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.log('ERROR:', err.message);
});

// const PostSchema = new mongoose.Schema({
//   title: String,
//   description: String,
// });

// const Post = mongoose.model('Post', PostSchema);

const ArticleSchema = new mongoose.Schema({
  title: String,
  link: String,
  imageUrl: String, 
})

const Article = mongoose.model('Article', ArticleSchema);

app.get('/', async (req, res) => {
  // let post = await Post.create({title: 'Test', description: 'This is a test also'});
  let article = await Article.create({title: 'CSS Animations: Smooth Change from 100% to 0%', link: 'https://medium.com/@omarshishanischool/css-animations-smooth-change-from-100-to-0-b578bc33a643', imageUrl:'/thumbnails/smooth_css.png' })
  // res.send(post);
  res.send(article);
  res.send('Is this thing on?')
});

app.listen(3000, () => { 
  console.log('Server is listening on port 3000') 
});