import { useState } from 'react'
import Editor from '@monaco-editor/react'

function App() {
  const [code, setCode] = useState('// Start coding...')

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
