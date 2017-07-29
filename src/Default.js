import React from 'react';
import './css/Default.css'

class Default extends React.Component {
  render() {
    return (
      <div className="introWrapper">
        <h1 className="intro">INTRO</h1>
        <h2 className="subIntro">簡介</h2>
        <p className="introContent">
          這是一個利用antd和react寫成的個人網頁，如果有任何問題請聯繫我。
        </p>
      </div> 
    )
  }
}

export default Default;