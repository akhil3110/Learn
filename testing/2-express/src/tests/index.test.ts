import {it,describe, expect} from "@jest/globals"
import {app} from "../index"
import request from "supertest"


describe("test the sum endpoint", () =>{

    it("should return 3 when 1+2",async () => {

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })

        expect(res.body.sum).toBe(3)
        expect(res.statusCode).toBe(200)
    })

    it("should return error number greater than 1000000", async() => {

        const res = await request(app).post("/sum").send({
            a:10000000,
            b:2
        })

        expect(res.body.message).toBe("sorry we do not suppor tbig numbers rigth now")
        expect(res.statusCode).toBe(422)


    })

})

describe("test the multiplication endpoint", () => {
    it("should return 6 when 3*2",async () => {

        const res = await request(app).post("/miltiply").send({
            a: 3,
            b: 2
        })

        expect(res.body.multiplication).toBe(6)
        expect(res.statusCode).toBe(200)
    })

})