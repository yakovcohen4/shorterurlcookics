const URL = require('../models/url');
const shortid = require('shortid');
const baseUrl = 'http://localhost:3000/api/home';
const moment = require('moment');

exports.createNewShortUrl = async (req, res, next) => {
  try {
    const { longUrl } = req.body;
    let { userName } = req.body;
    if (userName === '') userName = 'DB';
    const id = shortid.generate();
    const shortUrl = baseUrl + '/' + id + '/' + userName;
    const userUrlArr = await URL.find({ userName: userName });
    if (userUrlArr.length === 0) {
      const newURL = await URL.create({
        userName: userName,
        longUrl: longUrl,
        _id: id,
        shortUrl: shortUrl,
        numOfEnter: 0,
      });
      res.status(200).send(shortUrl);
    }
    // res.send({"shortUrl":`${shortUrl}/${userName}`,"id":iD});
    else {
      for (let url of userUrlArr) {
        if (url.longUrl == longUrl) return res.send(url.shortUrl);
      }
      const newURL = await URL.create({
        userName: userName,
        longUrl: longUrl,
        _id: id,
        shortUrl: shortUrl,
        numOfEnter: 0,
      });
      return res.send(shortUrl);
    }
  } catch (error) {
    next(error);
  }
};

exports.getUrl = async (req, res, next) => {
  try {
    console.log('in the get url fun');
    const id = req.params.id;
    console.log('id is ' + id);
    await URL.updateOne({ _id: id }, { $inc: { numOfEnter: 1 } }); // increase by ones
    const urlNow = await URL.findOne({ _id: id });
    res.status(301).header('location', urlNow.longUrl);
    res.end();
  } catch (error) {
    next(error);
  }
};

exports.statistics = async (req, res, next) => {
  try {
    const id = req.params.id;
    const wanted = await URL.find({ id: id });
    const Wanted = wanted[0];
    let data = {
      date: moment(Wanted.createdAt).format('MMM Do YY'),
      redirectCount: Wanted.numOfEnter,
    };
    res.send(data);
  } catch (error) {
    next(error);
  }
};
