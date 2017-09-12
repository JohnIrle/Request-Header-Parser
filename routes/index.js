const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/favicon.ico', function(req, res) {
    res.status(204);
});

router.get('/api/whoami', function(req, res) {
  const ip = req.get('x-forwarded-for');
  const ipParse = ip.split(',');
  const language = req.get('accept-language');
  const languageParse = language.split(',');
  const software = req.get('user-agent');
  const softwareParse = software.split(/[()]+/);

  res.send({
    ipaddress: ipParse[0],
    language: languageParse[0],
    software: softwareParse[1]
  });

  console.log(req.headers)
});

module.exports = router;
