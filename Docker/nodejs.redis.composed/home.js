const express = require('express');
const redis = require('redis');

const app = express();

//route
const client = redis.createClient({
  host: 'redis',
  port: 6379
});

// set first count to zero
client.get('visitsCounter', (err, data) => {
  if (data === null) {
    client.set('visitsCounter', 0);
  }
});

//count and increment
app.get('/', (req, res) => {
  client.incr('visitsCounter', (err, visits) => {
    if (err) return res.send('Error');

    res.send('visit counts: ' + visits);
  });
});

// listen 
app.listen(8080, () => {
  console.log('Listening on port 8080');
})

