#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 404) {
    console.log('Movie ID not found');
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
