import React,{useState} from 'react';
import md5 from 'md5';

import './styles.css';

function Mandalum() {

const [stateval, setstateval] = useState("");

const modif = (e) =>{ 
  setstateval(e.target.value)
};
const monb= md5(stateval);
const var1= parseInt(monb.slice(0,2),16).toString(8)
const var2=parseInt(monb.slice(2,4),16).toString(8)
const var3=parseInt(monb.slice(4,6),16).toString(8)
const var4=parseInt(monb.slice(6,8),16).toString(8)
const var5=parseInt(monb.slice(8,10),16).toString(8)
const var6=parseInt(monb.slice(10,12),16).toString(8)
const var7=parseInt(monb.slice(12,14),16).toString(8)
const var8=parseInt(monb.slice(14,16),16).toString(8)
const var9=parseInt(monb.slice(16,18),16).toString(8)
const var10=parseInt(monb.slice(18,20),16).toString(8)
const var11=parseInt(monb.slice(20,22),16).toString(8)
const var12=parseInt(monb.slice(22,24),16).toString(8)
const var13=parseInt(monb.slice(24,26),16).toString(8)
const var14=parseInt(monb.slice(26,28),16).toString(8)
const var15=parseInt(monb.slice(28,30),16).toString(8)
const var16=parseInt(monb.slice(30,32),16).toString(8)

const mandalvar=`M `+var1+`,`+var2+` C `+var3+`,`+var4+` `+var5+`,`+var6+` `+var7+`,`+var8
const mandalvar2=`M `+var9+`,`+var10+` C `+var11+`,`+var12+` `+var13+`,`+var14+` `+var15+`,`+var16

    return (
      <div className="center">
        <svg >  
        <defs>              
            <path d={mandalvar} id="bird"/>  
            <path d={mandalvar2} id="bird2"/> 
        </defs>        
        </svg>  
        <input onChange={(e)=>modif(e)} value={stateval} > 

        </input>   
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