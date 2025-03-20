import express from "express";

export const app = express()
app.use(express.json())



app.post("/sum", (req,res) => {
    try {
        
        const a = req.body.a;
        const b = req.body.b;

        const result = a+b;

        if(a>1000000 || b>1000000){
            res.status(422).json({
                message: "sorry we do not suppor tbig numbers rigth now"
            })
            return
        }

        res.json({
            sum: result
        })

    } catch (error) {
        console.log(error)
    }
})


app.post("/miltiply", (req,res) => {
    try {
        
        const a = req.body.a;
        const b = req.body.b;

        const result = a*b;

        res.json({
            multiplication: result
        })

    } catch (error) {
        console.log(error)
    }
})


