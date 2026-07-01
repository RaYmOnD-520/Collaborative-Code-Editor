function EditorNavbar({ roomId, userCount, onLeave }) {
  return (
    <div style={{ height: '52px', flexShrink: '0', backgroundColor: '#232220', borderBottom: '1px solid #34322d', display: 'flex', alignItems: 'center', padding: '0 16px', fontFamily: "'Inter', system-ui, sans-serif" }}>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '9px' }}>
        <div style={{ width: '26px', height: '26px', borderRadius: '7px', backgroundColor: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', fontSize: '13px', color: '#1C1B19' }}>{'{ }'}</div>
        <span style={{ fontSize: '15px', fontWeight: '600', color: '#ECE9E2', letterSpacing: '-0.01em' }}>CodeCollab</span>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#1C1B19', border: '1px solid #34322d', borderRadius: '8px', padding: '5px 12px' }}>
          <span style={{ fontSize: '12px', color: '#7a756b' }}>Room</span>
          <span style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: '#ECE9E2' }}>{roomId}</span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#4ade80' }}></div>
          <span style={{ fontSize: '12.5px', color: '#a5a096' }}>{userCount} {userCount === 1 ? 'user' : 'users'}</span>
        </div>
        <button
          onClick={onLeave}
          style={{ backgroundColor: 'transparent', border: '1px solid #3a382f', borderRadius: '7px', color: '#a5a096', fontSize: '12.5px', padding: '6px 12px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}
        >
          Leave
        </button>
      </div>

    </div>
  )
}

export default EditorNavbar
