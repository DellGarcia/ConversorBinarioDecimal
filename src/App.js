import React, {useState} from 'react';

import './global.css'

function App() {

  const [ decimal, setDecimal ] = useState('')
  const [ binary, setBinary ] = useState('')

  function handleConvert(e) {
    e.preventDefault()

    setDecimal(parseInt(binary, 2))

    console.log('enviou')
  }

  return (
    <main>
      
      <form onSubmit={handleConvert}>
        <label htmlFor="txtBin">Informe um valor em binario (0 e 1)</label><br/>
        <input id="txtBin" value={binary} minLength="8" maxLength="8" onChange={e => setBinary(e.target.value)} required/>
        <button type="submit">Converter</button>
      </form>
      <textarea className="resultView" value={decimal} readOnly></textarea>
    </main>
  );
}

export default App;
