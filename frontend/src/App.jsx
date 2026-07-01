import { useState, useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react'
import RoomLobby from './RoomLobby'
import EditorNavbar from './EditorNavbar'

function App() {
  const [roomId, setRoomId] = useState(null)
  const [code, setCode] = useState('// Start coding...')
  const [userCount, setUserCount] = useState(1)
  const ws = useRef(null)

  const handleJoin = (id) => {
    setRoomId(id)
  }

  const handleLeave = () => {
    if (ws.current) ws.current.close()
    setRoomId(null)
    setCode('// Start coding...')
    setUserCount(1)
  }

  useEffect(() => {
    if (!roomId) return

    ws.current = new WebSocket(`ws://localhost:8000/ws/${roomId}`)

    ws.current.onopen = () => {
      console.log(`Connected to room: ${roomId}`)
    }

    ws.current.onmessage = (event) => {
      setCode(event.data)
    }

    ws.current.onclose = () => {
      console.log('Disconnected from room')
    }

    return () => {
      ws.current.close()
    }
  }, [roomId])

  if (!roomId) {
    return <RoomLobby onJoin={handleJoin} />
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1C1B19' }}>
      <EditorNavbar roomId={roomId} userCount={userCount} onLeave={handleLeave} />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => {
            setCode(value)
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
              ws.current.send(value)
            }
          }}
          theme="vs-dark"
        />
      </div>
    </div>
  )
}

export default App
