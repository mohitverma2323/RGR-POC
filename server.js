import express from 'express';
import {MongoClient} from 'mongodb';

let app = express();
app.use(express.static('public'));

let db;

let MONGO_URL = "mongodb://localhost:27017/rgrpoc";

MongoClient.connect(MONGO_URL, (err, database) => {
  if (err) throw err;

  db = database;
  app.listen(3000, () => console.log('Listening on port 3000'));
});

app.get("/data/links", (req, res) => {
  db.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });
});
