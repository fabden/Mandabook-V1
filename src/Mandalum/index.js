import React from 'react';
import md5 from 'md5';

import './styles.css';

function Mandalum() {

const monb= md5('Fafbrfffff,,tnjkjknk,uyk,nui,fice');
console.log(monb);
console.log(monb.slice(0,2))
console.log(monb.slice(2,4))
console.log(monb.slice(4,6))
console.log(monb.slice(6,8))
console.log(monb.slice(8,10))
console.log(monb.slice(10,12))
console.log(monb.slice(12,14))
console.log(monb.slice(14,16))
console.log(monb.slice(16,18))
console.log(monb.slice(18,20))
console.log(monb.slice(20,22))
console.log(monb.slice(22,24))
console.log(monb.slice(24,26))
console.log(monb.slice(26,28))
console.log(monb.slice(28,30))
console.log(monb.slice(30,32))
console.log(monb.length);
console.log(monb.toString(2))
console.log(parseInt(monb.slice(30,32),16).toString(8));



    return (
      <div >
        <svg >  
        <defs>              
            <path d="M 230,346 C 285,66 654,66 4,6" id="bird"/>  
            <path d="M 267,36 C 445,64 64,164 44,6" id="bird2"/> 
        </defs>        
        </svg>     
        <svg  className="mandalaDisplay" >
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(0deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(10deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(20deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(30deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(40deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(50deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(60deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(70deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(80deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(90deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(100deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(110deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(120deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(130deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(140deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(150deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(160deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(170deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(180deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(190deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(200deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(210deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(220deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(230deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(240deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(250deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(260deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(270deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(280deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(290deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(300deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(310deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(320deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(330deg)`}} />
            <use xlinkHref="#bird2" className="rotation" style={{transform:`rotate(340deg)`}} />
            <use xlinkHref="#bird" className="rotation" style={{transform:`rotate(350deg)`}} />
             
        </svg>
      </div>
    );
  }
  export default Mandalum;