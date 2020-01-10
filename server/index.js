import express from 'express';
import path from 'path';
import parser from 'body-parser';
import connection from '../db'

const app = express();
const PORT = 2020;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});


app.listen(PORT, () => console.log(`Connected to reservation_system ${PORT}`))