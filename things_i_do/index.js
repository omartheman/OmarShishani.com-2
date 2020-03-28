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

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Post = mongoose.model('Post', PostSchema);

app.get('/', async (req, res) => {
  let post = await Post.create({title: 'Test', description: 'This is a test also'});
  
  res.send(post);
  res.send('Is this thing on?')
});

app.listen(3000, () => { 
  console.log('Server is listening on port 3000') 
});