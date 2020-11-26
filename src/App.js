import React from 'react';

import Mandalum from '../src/Mandalum';
import Header from '../src/Header';
import Footer from '../src/Footer';
import  Description from '../src/Description';


function App() {

  return (
  <div className="app"> 
    <Header />
    <Description />
    <section className="section_application">      
        <Mandalum mand={2} type={"prenom"}/>
        <Mandalum mand={1} type={"citation"}/>
        <Mandalum mand={3} type={"messagePerso"}/>
    </section>   
    <Footer />
</div>
    
  );
}

export default App;
