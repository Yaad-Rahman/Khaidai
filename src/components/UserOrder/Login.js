import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {TextField, Button} from '@material-ui/core';
import GoogleAuth from './GoogleAuth';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    pointerEvents: 'auto',
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{textAlign: 'center', margin: '10px'}}>Welcome !</h2>
            <p style={{margin: '10px'}}>To continue, Please Sign In </p>
            <GoogleAuth />
                <Button variant='contained'
                color='secondary'
                onClick={handleClose}
                style={{marginTop: '10px'}} >
                    Cancel
                </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
