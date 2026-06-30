import { useState, useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react'

function App() {
  const [code, setCode] = useState('// Start coding...')
  const ws = useRef(null)

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/ws/room1')

    ws.current.onopen = () => {
      console.log('Connected to room')
    }

    ws.current.onmessage = (event) => {
      console.log(event.data)
    }
  }, [])

  return (
    <div style={{ height: '100vh' }}>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  )
}

export default App
