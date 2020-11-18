const http = require('http');
const port = process.env.PORT || 3000
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World Im Testing Deep Links</h1>');
// });
//
// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });

var express = require('express');
var deeplink = require('node-deeplink');
var app = express();

// mount deeplink middleware
app.get(
  '/deeplink',
  deeplink({
    fallback: 'https://explore.mapmyindia.com/',
    android_package_name: 'com.prayerrntesting',
    ios_store_link:
      'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4',
  })
);

app.use(express.static('public'));

app.listen(port);
console.log('deeplink service listening on port 3000');

