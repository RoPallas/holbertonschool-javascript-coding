#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 404) {
    console.log('URL not found');
  } else {
    fs.writeFile(path, body, 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
