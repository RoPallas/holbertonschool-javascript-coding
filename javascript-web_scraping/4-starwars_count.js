#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 404) {
    console.log('URL not found');
  } else {
    let count = 0;
    const data = JSON.parse(body);
    for (const film of data.results) {
      for (const character of film.characters) {
        if (character.endsWith('/18/')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
