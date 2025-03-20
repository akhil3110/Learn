import { createClient } from "redis";

const client = createClient()

 
async function processSubmission(submission: string){
    try {
        
        const {problemId, userId, code, language } = JSON.parse(submission)
        console.log("problemId: ", problemId)
        console.log("userId: ", userId)
        console.log("code: ",code)
        console.log("language: ", language)
 
        await new Promise(resolve=>setTimeout(resolve,5000))
        console.log(`Finished processing submission for problem ${problemId}`)

    } catch (error) {
        console.log("process submission error", error)
    }
}

async function main() {
    try {
        
        await client.connect()
        console.log("redis client connected")
        
        while(1){

            try {
                
                const submission = await client.brPop("submission",0)
                //@ts-ignore
                await processSubmission(submission?.element)
            } catch (error) {
                console.log("Error proessing submission", error)
            }
        }

    } catch (error) {
        console.log("worker main function", error)
    }
}

main()