import { Container ,Button, TextField, Typography, Stack } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import {io} from 'socket.io-client'

 const App = () => {

  const [messages, setMessages] = useState("")
  const [receivedMessages, setReceivedMessages] = useState([])
  const [room, setRoom] = useState("")
  const [socketID, setSocketID] = useState("")
  const [allMessages, setAllMessages] = useState([])
  const [roomName, setRoomName] = useState("")

  const socket = useMemo(() => io('http://localhost:3000',{
    withCredentials: true,
  
  }), [])

  useEffect(() => {
    socket.on('connect', () => {
      setSocketID(socket.id)
      console.log('connected', socket.id)
    })

    socket.on('Welcome', (data) => {
      console.log(data)
    })
    
    socket.on('received', ({messages,room}) => {
      setAllMessages((data) => [...data, messages])
    })

    return () => {
      socket.disconnect()
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', {messages,room})

  }

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit('joinRoom', roomName)

  }

  return (
    <Container maxWidth="sm">
      <Typography  component="div" gutterBottom>
        Welcome to the chat app
      </Typography>
      <Typography variant='h5' component="div" gutterBottom>
        {socketID}
      </Typography>

      <form onSubmit={joinRoomHandler}>
        <h5>Join Room</h5>
        <TextField 
          value={roomName} 
          id="outlined-basic" 
          label="Room Name" 
          variant='outlined' 
          onChange={(e) => setRoomName(e.target.value)}
        />
        <Button type="submit" variant='contained' color='primary'>Join</Button>   
      </form>

      <form onSubmit={handleSubmit}>
        <TextField 
          value={messages} 
          id="outlined-basic" 
          label="Message" 
          variant='outlined' 
          onChange={(e) => setMessages(e.target.value)}
        />
        <TextField 
          value={room} 
          id="outlined-basic" 
          label="Room" 
          variant='outlined' 
          onChange={(e) => setRoom(e.target.value)}
        />
        <Button type="submit" variant='contained' color='primary'>Send</Button>       
      </form>
      <Stack spacing={1}>
        {allMessages.map((message, index) => (
          <Typography key={index} variant='h6' component="div" gutterBottom>
            {message}
          </Typography>
        ))}
      </Stack>
    </Container>
  )
}

export default App;
