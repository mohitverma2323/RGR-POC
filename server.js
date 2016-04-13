import express from 'express';

let app = express();

app.get('/',(req,res) => res.send('hello, doctor strange here!'));

app.listen(3000);