import React from 'react';

import Mandalum from '../src/Mandalum';


function App() {

  return (
    <div className="app">      
      <Mandalum mand={1}/>
      <Mandalum mand={2}/> 
      <Mandalum mand={3}/>                 
    </div>
  );
}

export default App;
