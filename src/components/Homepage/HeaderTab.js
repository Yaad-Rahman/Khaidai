import React from 'react';
import './homepage.css';

class HeaderTab extends React.Component {
  render() {
    return(
      <div className="header">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Events & Private dining</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}

export default HeaderTab;