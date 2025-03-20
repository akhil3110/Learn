import express, { NextFunction, Request, Response } from "express";
import client , {Gauge, Histogram}from "prom-client";
import { Counter } from "prom-client";
import { MetricsMiddleware } from "./middleware";

const app = express();

app.use(express.json());



app.use(MetricsMiddleware)

app.get("/user", async(req, res) => {
    res.status(200).send({
        name: "John Doe",
        age: 25,
    });
});

app.get("/info", (req, res) => {
    res.status(200).send({
        name: "John Doe",
        age: 25,
    });
});


app.post("/user", (req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id: 1,
    });
});

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000, () => {
    console.log("App running on port 3000")
});