import React from 'react';
import AdminBar from './Appbar';
import './AdminPage.css';
import {TextField, Button} from '@material-ui/core';


class AdminPage extends React.Component {
  state= {
    code: ''
  }

  changeHandler = (e) => {
      this.setState({
          [e.target.name] : e.target.value

      })
  }

  submitHandler = (e) => {
      e.preventDefault();
    }

  renderConfig = () => {
    return(
      <form>
      <TextField label="Access Code" value={this.state.code}
      onChange={this.changeHandler} />
      <Button variant="contained" color="primary"
      onClick={this.submitHandler} type="submit">
      Get Access
      </Button>
      </form>
    )
  }

  render() {
    return (
      <div>
      <AdminBar />
      </div>
    )
  };
};

export default AdminPage;
