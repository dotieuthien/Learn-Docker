// import libs
const express = require('express');
const redis = require('redis');
const process = reuire('process');

// create an instance of express app
const app = express();
// Connection to redis server
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

// GET method route is made to the homepage '/'
app.get('/', (req, res) => {
  // get number of times our page has been visited
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});