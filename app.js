const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World Im Testing Deep Links</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

var express = require('express');
var deeplink = require('node-deeplink');

var app = express();

app.get(
  '/deeplink',
  deeplink({
    fallback: 'https://cupsapp.com',
    android_package_name: 'com.citylifeapps.cups',
    ios_store_link:
      'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4',
  })
);
