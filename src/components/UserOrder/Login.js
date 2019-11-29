import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {TextField, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a href="#" onClick={handleOpen}>
        Log In
      </a>
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
            <h2>Welcome !</h2>
            <form>
                <TextField
                variant='outlined'
                label='Enter Email'
                /> <br /> <br/>
                <TextField
                variant='outlined'
                label='Enter Password'
                type='password'
                /> <br/> <br/>
                <Button variant='contained'
                color='primary'>
                    Log In
                </Button>
                <Button variant='contained'
                color='secondary'
                onClick={handleClose} >
                    Cancel
                </Button>


            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
