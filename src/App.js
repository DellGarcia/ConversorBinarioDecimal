import React from 'react';

function App() {

  function handleConvert(e) {
    e.preventDefault()
    console.log('enviou')
  }

  return (
    <main>
      <textarea></textarea>
      <form onSubmit={handleConvert}>
        <input required/>
        <button type="submit">Converter</button>
      </form>
    </main>
  );
}

export default App;
