import React, {PureComponent} from 'react';
import Button from "material-ui/Button/Button";
import { Dialog, DialogActions, DialogContent, DialogTitle } from 'material-ui'
import SignUp from "./signup/signup";

export default class PopupSignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen = e => {
    e.stopPropagation();
    this.setState({open: true});
  };

  handleClose = e => {
    e.stopPropagation();
    this.setState({open: false})
  };

  render() {
    return(
      <div>
        <Button colorcus={'#f44336'} onClick={this.handleClickOpen}>
          Sign-up
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <SignUp/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
