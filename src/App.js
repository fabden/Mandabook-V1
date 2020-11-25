import React from 'react';

import Mandalum from '../src/Mandalum';
import Header from '../src/Header';



function App() {

  return (
  <div className="app"> 
    <Header />
    <section className="section_application">
        <Mandalum mand={2} type={"prenom"}/>
        <Mandalum mand={1} type={"citation"}/>
        <Mandalum mand={3} type={"messagePerso"}/>
    </section>    
    
</div>
    
  );
}

export default App;
