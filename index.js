const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001

app.get("/favicon.ico", (req, res) => {
  res.send("")
})

app.get("/", (req, res) => {
  res.send(`Hello ${process.env.HELLO || ""}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
