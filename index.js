const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
  );
  
app.get('/content', db.getContent);
app.get('/content/:id', db.getContentById);
app.use(express.static("exam"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});