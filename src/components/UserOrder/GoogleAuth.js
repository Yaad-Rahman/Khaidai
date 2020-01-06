import React from 'react';
import {Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {signIn, signOut} from '../../actions';



class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '69287288090-gra3fu4rdi1g5salrga46i7s3gc7ea92.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(),
            this.auth.currentUser.get().getBasicProfile().ig);
        }
        else {
            this.props.signOut();
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }


    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn) {
            return(
                <Button variant="contained"
                color="secondary"
                onClick={this.onSignOut}
                >
                    <img src="./googlebtn.svg" alt="btn" />
                    Sign Out
                </Button>
            )
        }
        else {
            return (
                <Button variant="contained"
                color="primary"
                onClick={this.onSignIn}
                >
                    <img src="./googlebtn.svg" alt="btn" />
                    Sign In With Google
                </Button>
            )
        }
    }

    render()
    {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
