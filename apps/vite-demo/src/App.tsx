import React, { useState } from 'react'
import { CopyButton, CopyOnClick, useClipboard } from '@such/react-clipboard-lite'

export default function App() {
  const [txt, setTxt] = useState('Hello from react-clipboard-lite')
  const { copy, isCopying } = useClipboard()

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24, lineHeight: 1.6 }}>
      <h1>react-clipboard-lite Demo</h1>
      <p>Try the components and hook below.</p>

      <h2>CopyButton</h2>
      <CopyButton text={txt} onCopied={() => alert('Copied!')}>
        {isCopying ? 'Copying…' : 'Copy current text'}
      </CopyButton>

      <h2 style={{ marginTop: 24 }}>CopyOnClick</h2>
      <p>
        Click this code to copy:{' '}
        <CopyOnClick text={txt}>
          <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 6 }}>{txt}</code>
        </CopyOnClick>
      </p>

      <h2 style={{ marginTop: 24 }}>Hook</h2>
      <input
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #d1d5db', width: 420 }}
      />
      <button onClick={() => copy(txt)} style={{ marginLeft: 12, padding: '8px 12px' }}>
        Use hook copy()
      </button>
    </div>
  )
}