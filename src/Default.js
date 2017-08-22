import React from 'react';
import './css/Default.css'

class Default extends React.Component {
  render() {
    return (
      <div className="introWrapper">
        <h1 className="intro">INTRO</h1>
        <h2 className="subIntro">簡介</h2>
        <div className="profile"></div>
        <p className="introContent">
          剛從陰間歸來，有一種在叢林生活久了，還無法適應城市的感覺。在巴黎、冰島以及澳洲旅遊了一陣子。<br />
          喜歡插畫塗鴉、攝影還有Js，會AI和一點PS，常常在用LR修圖。 <br />
          不斷在學習前端技術，希望成為一個好的前端工程師。
        </p>
      </div> 
    )
  }
}

export default Default;