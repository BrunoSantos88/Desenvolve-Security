const express = require('express');
const { register, collectDefaultMetrics } = require('prom-client');

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
    res.status(500).end(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});