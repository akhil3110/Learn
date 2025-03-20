import express, { json } from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log("User Connected",socket.id);

    socket.on("message", ({messages,room}) => {
        console.log(messages);
        // socket.emit("message", message);
        io.to(room).emit("received", {messages})
    });

    socket.on("joinRoom", (room) => {
        socket.join(room);
        console.log("User joined room", room);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
});

const seceret_key = "secret"

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
})

io.use((socket, next) => {
   cookieParser()(socket.request, socket.request.res, (error) =>{
        if(error){
            return next(error)
        }

        const token = socket.request.cookies.token;

        if(!token) return next(new Error('Authentication error'));

        const disconnect = jwt.verify(token, seceret_key)

        next();
   });
});

app.get("/login", (req, res) => {
    
    const token = jwt.sign({_id: "adadadad"}, seceret_key, {expiresIn: '1h'})

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }).json({
        message: "User logged in"
    });

});

server.listen(port, () => {
    console.log('Server is running on http://localhost:'+port);
})