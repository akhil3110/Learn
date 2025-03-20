import { PrismaClient } from "@prisma/client";
import express from "express"

const app = express();
app.use(express.json())


const prismaClient = new PrismaClient()

app.get("/", async (req,res) => {

    const allUsers = await prismaClient.user.findMany()

    res.send({
        "message": "Hey server running",
        "users": allUsers
    })
})


app.post("/", async (req,res) => {
    try {
        const name = req.body.name || Math.random().toString();
        const password  = req.body.password || Math.random().toString();


        const newUser = await prismaClient.user.create({
            data: {
                name,
                password
            }
        })

        res.send({
            "message": "New user connected",
            "new-user": newUser
        })
    } catch (error) {
        console.log("/crete-user", error)
    }
} )


app.listen(3000, () => {
    console.log("Website running on port 3000")
})