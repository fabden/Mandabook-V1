import React,{useState} from 'react';
import md5 from 'md5';

import './styles.css';

function Mandalum({mand}) {
//state input 
  const [stateval, setstateval] = useState({inputval:null,
    var1:0,var2:0,var3:0,var4:0,var5:0,var6:0,var7:0,var8:0,var9:0,var10:0,var11:0,var12:0,var13:0,var14:0,var15:0,var16:0});

//fonction input controlé
  const onchangeinput = (e) =>{   
    const monb= md5(e.target.value);    
    setstateval({...stateval,
      inputval:e.target.value,
      var1:parseInt(monb.slice(0,2),16).toString(8),
      var2:parseInt(monb.slice(2,4),16).toString(8),
      var3:parseInt(monb.slice(4,6),16).toString(8),
      var4:parseInt(monb.slice(6,8),16).toString(8),
      var5:parseInt(monb.slice(8,10),16).toString(8),
      var6:parseInt(monb.slice(10,12),16).toString(8),
      var7:parseInt(monb.slice(12,14),16).toString(8),
      var8:parseInt(monb.slice(14,16),16).toString(8),
      var9:parseInt(monb.slice(16,18),16).toString(8),
      var10:parseInt(monb.slice(18,20),16).toString(8),
      var11:parseInt(monb.slice(20,22),16).toString(8),
      var12:parseInt(monb.slice(22,24),16).toString(8),
      var13:parseInt(monb.slice(24,26),16).toString(8),
      var14:parseInt(monb.slice(26,28),16).toString(8),
      var15:parseInt(monb.slice(28,30),16).toString(8),
      var16:parseInt(monb.slice(30,32),16).toString(8),
    });

//reinisialise les varaibles si input vide
    if(e.target.value===""){
      setstateval({inputval:null,
    var1:0,var2:0,var3:0,var4:0,var5:0,var6:0,var7:0,var8:0,var9:0,var10:0,var11:0,var12:0,var13:0,var14:0,var15:0,var16:0});
    };}

//fonction randomfixe 
const randomfixe = ()=>{ 
  setstateval({...stateval,    
    var1:Math.floor(Math.random()*255),
    var2:Math.floor(Math.random()*255),
    var3:Math.floor(Math.random()*255),
    var4:Math.floor(Math.random()*255),
    var5:Math.floor(Math.random()*255),
    var6:Math.floor(Math.random()*255),
    var7:Math.floor(Math.random()*255),
    var8:Math.floor(Math.random()*255),
    var9:Math.floor(Math.random()*255),
    var10:Math.floor(Math.random()*255),
    var11:Math.floor(Math.random()*255),
    var12:Math.floor(Math.random()*255),
    var13:Math.floor(Math.random()*255),
    var14:Math.floor(Math.random()*255),
    var15:Math.floor(Math.random()*255),
    var16:Math.floor(Math.random()*255),
  });
}

   

    return (
      <div className="center">
        <svg className="svgmettre">  
        <defs>
          <g id={`line`+mand+`1`}>            
            <path d={`M `+stateval.var1+`,`+stateval.var2+` C `+stateval.var3+`,`+stateval.var4+` `+stateval.var5+`,`+stateval.var6+` `+stateval.var7+`,`+stateval.var8} />  
            <path d={`M `+stateval.var9+`,`+stateval.var10+` C `+stateval.var11+`,`+stateval.var12+` `+stateval.var13+`,`+stateval.var14+` `+stateval.var15+`,`+stateval.var16}/> 
            <path d={`M `+stateval.var16+`,`+stateval.var15+` C `+stateval.var14+`,`+stateval.var13+` `+stateval.var12+`,`+stateval.var11+` `+stateval.var1+`,`+stateval.var10} />
        </g> 
        </defs>        
        </svg>  
        <input onChange={(e)=>onchangeinput(e)} ></input>
        <button onClick={(e)=>randomfixe(e)}>Aleatoire</button>
        <svg  className="mandalaDisplay" >
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(0deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(10deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(20deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(30deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(40deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(50deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(60deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(70deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(80deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(90deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(100deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(110deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(120deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(130deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(140deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(150deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(160deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(170deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(180deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(190deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(200deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(210deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(220deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(230deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(240deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(250deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(260deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(270deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(280deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(290deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(300deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(310deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(320deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(330deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(340deg)`}} />
            <use xlinkHref={`#line`+mand+`1`} className="rotation" style={{transform:`rotate(350deg)`}} />             
        </svg>
      </div>
    );
  }
  export default Mandalum;