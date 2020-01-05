import React from 'react';
import './homepage.css';

class HeaderTab extends React.Component {
  render() {
    return(
      <div className="header">
        <a href="#">Home</a>
        <a href="#MenuList">Menu</a>
        <a href="#">Events & Private dining</a>
        <a href="#">Contact</a>
        <div id="heading">
        <img src="logogab.svg" id="logogab" /> <br/>
         ATMC RESTRAURENT <br/> ASAD AVENUE </div>
      </div>
    )
  }
}

export default HeaderTab;
