import { useState } from 'react'

function RoomLobby({ onJoin }) {
  const [roomId, setRoomId] = useState('')

  const handleJoin = () => {
    if (roomId.trim()) onJoin(roomId.trim())
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1C1B19', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#232220', border: '1px solid #34322d', borderRadius: '16px', padding: '40px 36px', boxShadow: '0 24px 60px -20px rgba(0,0,0,0.6)' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '28px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '9px', backgroundColor: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', fontSize: '17px', color: '#1C1B19' }}>{ }</div>
          <div>
            <div style={{ fontSize: '21px', fontWeight: '600', color: '#ECE9E2', letterSpacing: '-0.02em' }}>CodeCollab</div>
            <div style={{ fontSize: '13px', color: '#8a857b', marginTop: '1px' }}>Real-time collaborative coding</div>
          </div>
        </div>

        <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#a5a096', marginBottom: '8px' }}>Room ID</label>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
          style={{ width: '100%', height: '46px', backgroundColor: '#1C1B19', border: '1px solid #3a382f', borderRadius: '10px', padding: '0 14px', color: '#ECE9E2', fontSize: '15px', fontFamily: "'JetBrains Mono', monospace", outline: 'none', marginBottom: '16px', boxSizing: 'border-box' }}
        />

        <button
          onClick={handleJoin}
          style={{ width: '100%', height: '46px', backgroundColor: '#D97706', border: 'none', borderRadius: '10px', color: '#1C1B19', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}
        >
          Join Room
        </button>

        <div style={{ textAlign: 'center', fontSize: '12.5px', color: '#6f6a61', marginTop: '18px' }}>
          Share your Room ID with others to collaborate
        </div>

      </div>
    </div>
  )
}

export default RoomLobby
