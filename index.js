import React from 'react';
import ReactDOM from 'react-dom';

const obj1 = "Md zihadul islam";
const obj2 = "AIUB";
const obj3 = "01/10/1999";


ReactDOM.render(
  <div>
    <h1 className="omg">{obj1}</h1>
    <div className= "card">
       <h2 className="cardOp">{obj2}</h2>
       <p className="cardXd">I love to watch movie . Love to play cricket.</p>
       <h3 className="cardLove">{obj3}</h3>
    </div>
    
  </div>,
  document.getElementById('root')
);
