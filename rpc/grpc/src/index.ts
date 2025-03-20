import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import { error } from 'console';
import { Status } from '@grpc/grpc-js/build/src/constants';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = grpc.loadPackageDefinition(packageDefinition);

const PERSONS = [
    {
        name: "Akhil",
        age: 25
    },
    {
      name: "raman",
      age: 45
    },
];


// call => like req in express
// callback => like res in express
//@ts-ignore
function addPerson(call, callback) {
  console.log(call)
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person)
}

//@ts-ignore
function getUser(call,callback){
    try {
        console.log("adad")
        let personExist = PERSONS.find((a) => a.name === call.request.name )
        console.log(personExist,"adad")
        if(personExist){
            callback(null,personExist)
        } else {
            callback({
                code: Status.NOT_FOUND,
                details: "Not Found"
            },{message: "not Found"})
        }
    } catch (error) {
        console.log(error)
    }

}

//@ts-ignore
function getAllUser(call,callback){
    try {
        callback(null,{ persons: PERSONS })
    } catch (error) {
        console.log(error)
    }
}

//like app =express()
const server = new grpc.Server();


// like app.use("/persion", (req,res)=> {})
server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { 
    addPerson: addPerson, 
    getPersonByName: getUser,
    getAllPerson: getAllUser
});
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});