import React from 'react';

import Mandalum from '../src/Mandalum';


function App() {

  return (
    <main>
    <h1>Madalum</h1>
      <div className="app"> 
       <Mandalum mand={2} type={"prenom"}/>
       <Mandalum mand={1} type={"citation"}/>
       <Mandalum mand={3} type={"messagePerso"} />
      </div>
    </main>
  );
}

export default App;
