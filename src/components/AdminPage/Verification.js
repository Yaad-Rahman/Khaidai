import React from 'react';
import GoogleAuth from '../UserOrder/GoogleAuth';

class Verification extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <h2> Login to Get Access </h2>
      <GoogleAuth />
      </div>
    )
  }
}

export default Verification;
