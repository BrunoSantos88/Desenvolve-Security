const express = require('express');
const { collectDefaultMetrics, register } = require('prom-client');

collectDefaultMetrics();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err.toString());
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});