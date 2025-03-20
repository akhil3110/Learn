import express from "express"
import { createClient } from "redis"

const app = express()
app.use(express.json())
const client = createClient()

app.post("/submit", async(req,res) => {

    try {
        const {problemId, userId, code, language } = req.body;
        /// store in db
        await client.lPush("submission", JSON.stringify({problemId, userId, code, language}))
        res.status(200).json({
            messag: "submission recieved"
        })
        
    } catch (error) {
        console.log("POST /submit error", error)
    }

})


async function startServer() {
    try {
        
        await client.connect();
        console.log("reddis connected")

        app.listen(3000, () =>{
            console.log("express server connected")
        })

    } catch (error) {
        console.log("Failed to connect server",error)
    }
}

startServer()