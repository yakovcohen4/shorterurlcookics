const express = require('express');
const router = express.Router();
// const shortid = require('shortid');
const fs = require('fs');
const moment = require('moment');

// const baseUrl = "https://yakov-short-url.herokuapp.com/api";
const baseUrl = 'http://localhost:3000/api';

// router.post('/', (req, res) => {
//   const longUrl = req.body.longUrl;
//   const id = shortid.generate();
//   const shortUrl = baseUrl + '/' + id;
//   const userName = req.body.userName;
//   if (userName === '') userName = 'DB';

//   if (fs.existsSync(`./back/${userName}.json`)) {
//     data = JSON.parse(fs.readFileSync(`./back/${userName}.json`, 'utf-8'));
//     for (let key in data) {
//       console.log('key ' + key);
//       if (data[key].longUrl === longUrl) {
//         console.log('data ' + data[key]);
//         return res.send(baseUrl + '/' + key + '/' + userName);
//       }
//     }
//     data[id] = { longUrl: longUrl, date: moment().format('LL'), numOfEnter: 0 };
//     fs.writeFileSync(`./back/${userName}.json`, JSON.stringify(data));
//     res.send(shortUrl);
//   } else {
//     fs.writeFileSync(`./back/${userName}.json`, '{}');
//     const dataBase = JSON.parse(
//       fs.readFileSync(`./back/${userName}.json`, 'utf-8')
//     );
//     dataBase[id] = {
//       longUrl: longUrl,
//       date: moment().format('LL'),
//       numOfEntr: 0,
//     };
//     fs.writeFileSync(`./back/${userName}.json`, JSON.stringify(dataBase));
//     res.send(shortUrl);
//   }
// });

// router.get('/:id/:userName', (req, res) => {
//   const id = req.params.id;
//   let userName = req.params.userName;
//   if (userName === '') {
//     userName = 'DB';
//   }
//   let dataBase = JSON.parse(
//     fs.readFileSync(`./back/${userName}.json`, 'utf-8')
//   );
//   dataBase[id]['numOfEnter'] += 1;
//   fs.writeFileSync(`./back/${userName}.json`, JSON.stringify(dataBase));
//   res.status(301).header('location', dataBase[id].longUrl);
//   res.end();
// });

// router.get('/statistic/:id/:userName', (req, res) => {
//   const id = req.params.id;
//   let userName = req.params.userName;
//   if (userName === '') userName = 'DB';
//   let dataBase = JSON.parse(
//     fs.readFileSync(`./back/${userName}.json`, 'utf-8')
//   );
//   let data = {
//     date: dataBase[id]['date'],
//     redirectCount: dataBase[id]['numOfEnter'],
//   };
//   res.send(data);
// });

const {
  createNewShortUrl,
  getUrl,
  statistics,
} = require('../../controller/url');
const { createNewUser, login } = require('../../controller/users');

router.post('/home', createNewShortUrl);
router.get('/:id/:userName', getUrl);
router.get('/statistic/:id/:userName', statistics);
router.post('/newUser', createNewUser);
router.post('/login', login);

module.exports = router;
