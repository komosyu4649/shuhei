import React from 'react';
import './Work.css';
import workSrc from '../../img/port-4.jpeg'

function Work() {
    return (
        <div className="work">
         <h2>Work</h2>
         <div class="work-set">
         <p>
         LP制作、Webメディア制作、企業サイト制作 <br/>
         によって価値あるWebサイトをご提供いたします。
         </p>
         </div>

         <div className="work-wrapper">
         <div className="work-history">
          <a href="https://www.wantedly.com/user/profile/edit">
           <h3>PORTFOLIO</h3>
           <img className="work-img" src={workSrc} alt="workSrc" />
          </a>
         </div>
         <div className="work-about">
         <p>
         フロントエンドのスキルを習得していく上で、
これまで作成してきたサイトの模写と <br/>
スキル習得後に自作してみた 
サイトを掲載しておりますので、
是非ご覧くださいませ
         </p>
         </div>
        </div>
        </div>
    );
}

export default Work;