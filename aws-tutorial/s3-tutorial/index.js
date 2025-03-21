const  {S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand} = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

const s3Client  =  new S3Client({
    region: "ap-south-1",
    credentials:{
        accessKeyId: "Your accesKey Id",
        secretAccessKey: "Your seceret key"
    }
})

async function getObjectURL(key) {
    const command =new GetObjectCommand({
        Bucket: 'bucket.akhilparmar.dev',
        Key:     key
    }) 

    const url = await getSignedUrl(s3Client, command);
    return url
}

async function putObject(filename, contentType) {
    const command  = new PutObjectCommand({
        Bucket: "bucket.akhilparmar.dev",
        Key: `uploads/user-uploads/${filename}`,
        ContentType: contentType
    })

    const url = await getSignedUrl(s3Client, command)
    return url
}

async function ListObjects() {
    const command =  new ListObjectsV2Command({
        Bucket: "bucket.akhilparmar.dev",
        Key: "/"
    })

    const result = await s3Client.send(command)
    console.log(result)
}

async function DeleteObject() {
    const command =  new DeleteObjectCommand({
        Bucket: "bucket.akhilparmar.dev",
        Key: "AWSIAM.jpg"
    })

    const result = await s3Client.send(command)
    console.log(result)
}

async function init(){
    console.log("Url for pic1.png is ", await getObjectURL("akhil1659@gmail.com/cm4xtjgcv0000eq7sx66z15rk-1735243082530.mp4") )
    // console.log('URL for uploading ' + await putObject(`image-${Date.now()}.mp4`, 'video/mp4'))

    // // await ListObjects()
    // await DeleteObject()
}

init()



