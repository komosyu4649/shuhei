import React from 'react';
import './Top.css';
import Intro from '../Intro/Intro'

function Top() {
  return(
      <main>
        <div className="top">
          <div className="top-message">
           <div className="one">
             <h2>にちじょうをたいせつに</h2>
           </div>
           <div className="two">
             <h2>Shuhei&nbsp;Komori</h2>
          </div> 
          </div>
        </div>
        <Intro />
      </main>
  );
}


export default Top;