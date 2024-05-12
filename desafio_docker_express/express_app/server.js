//const
const express = require('express');
const { register, collectDefaultMetrics } = require('prom-client');

// Initialize Prometheus metrics collection
collectDefaultMetrics();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Endpoint for exposing Prometheus metrics
app.get('/metrics', (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
  } catch (err) {
    res.status(500).send(`Error fetching metrics: ${err.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});