import React from 'react';
import { Card } from 'antd';
import ProfileImg from './image/profile.jpg';
import './css/About.css';

class About extends React.Component {
  render() {
    return (
      <div className="aboutWrapper">
        <div className="block">
          <h1>學歷</h1>
          <ul>
            <li>國立臺灣大學資訊管理學士</li>
          </ul>
        </div>
        <div className="block">
          <h1>經歷</h1>
          <ul>
            <li>塔圖科技公司 前端開發</li>
            <li>北祥股份有限公司 實習, R&D</li>
          </ul>
        </div>
        <div className="block">
          <h1>課程專案</h1>
          <ul>
            <li>癌友病友加油站</li>
            <li>雲端服務專題-手作分享網站</li>
          </ul>
        </div>
        <div className="block">
          <h1>社團</h1>
          <ul>
            <li>ITxM高峰會 2015 (新技術典範轉移下的創新與領導) 攝影</li>
            <li>JSDC 2014 場務</li>
            <li>國立臺灣大學資訊管理學系羽球隊 隊長</li>
            <li>國立臺灣大學資訊管理學系系學會 學術部長</li>
            <li>台大資管訊練營 2012 副召</li>
          </ul>
        </div>
        <div className="block">
          <a href="https://drive.google.com/open?id=0B1zcwOkXgiCdVVhLUVE4eFFBaTA">了解更多</a>
        </div>
      </div>
    )
  }
}

export default About;