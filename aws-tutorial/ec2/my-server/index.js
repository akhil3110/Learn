const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req,res) => res.json( { message: "Hey EveryOne from AWS server"}))

app.listen(process.env.port || 8000, () =>  console.log("Server started on AWS server"))