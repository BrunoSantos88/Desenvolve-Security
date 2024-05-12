
const http = require("http")
const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("Hello World!!"))

const server = http.createServer(app)

// FAZ O SERVIDOR RESPONDER NA PORTA 3000
server.listen(3000, () => console.log('Servidor rodando na porta %s.', 3000))