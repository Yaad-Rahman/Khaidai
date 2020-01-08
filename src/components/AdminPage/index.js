import React from 'react';
import AdminBar from './Appbar';
import './AdminPage.css';
import {connect} from 'react-redux';
import Verification from './Verification';


class AdminPage extends React.Component {

  renderConfig = () => {
    if(this.props.userId === "101150327305404523009")
      return <AdminBar />
    else
      return <Verification />

  }

  render() {
    console.log("userId", this.props);
    return (
      <div>
      {this.renderConfig()}

      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(AdminPage);
