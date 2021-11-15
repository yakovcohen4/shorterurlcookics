const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const fs = require('fs');
const moment = require('moment');

// const baseUrl = "https://yakov-short-url.herokuapp.com/api";
const baseUrl = 'https://localhost/3000';

router.post('/', (req, res) => {
  const longUrl = `${req.body.longUrl}`;
  const id = shortid.generate();
  const shortUrl = baseUrl + '/' + id;

  data = JSON.parse(fs.readFileSync('./back/database.json', 'utf-8'));
  for (let key in data) {
    console.log('key ' + key);
    if (data[key].longUrl === longUrl) {
      console.log('data ' + data[key]);
      return res.send(baseUrl + '/' + key);
    }
  }
  data[id] = { longUrl: longUrl, date: moment().format('LL'), numOfEnter: 0 };
  fs.writeFileSync('./back/database.json', JSON.stringify(data));
  res.send(shortUrl);
});

router.get('/:id/', (req, res) => {
  const id = req.params.id;
  let dataBase = JSON.parse(fs.readFileSync('./back/database.json', 'utf-8'));
  dataBase[id]['numOfEnter'] += 1;
  fs.writeFileSync('./back/database.json', JSON.stringify(dataBase));
  res.status(301).header('location', dataBase[id].longUrl);
  res.end();
});

router.get('/statistic/:id', (req, res) => {
  const id = req.params.id;
  let dataBase = JSON.parse(fs.readFileSync('./back/database.json', 'utf-8'));
  let data = {
    date: dataBase[id]['date'],
    redirectCount: dataBase[id]['numOfEnter'],
  };
  res.send(data);
});

module.exports = router;
