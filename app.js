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
    fallback: 'https://pray.mapmyindia.com/',
    android_package_name: 'com.mmi.pray',
    ios_store_link: 'https://apps.apple.com/in/app/pray-by-mapmyindia/id1543341726',
  })
);

app.use(express.static('public'));

app.listen(port);
console.log('deeplink service listening on port 3000');

