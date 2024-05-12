const express = require("express");
const { collectDefaultMetrics, register } = require('prom-client');

const app = express();

collectDefaultMetrics();

app.get("/", (req, res) => res.send("Hello World!!"));

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando na porta", PORT);
});