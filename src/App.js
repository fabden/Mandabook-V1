import React from 'react';

import Mandalum from '../src/Mandalum';


function App() {

  return (
    <main>
    <h1>Madalum</h1>
      <div className="app">          
        <Mandalum mand={1}/>
        <Mandalum mand={2}/> 
        <Mandalum mand={3}/>                 
      </div>
    </main>
  );
}

export default App;
