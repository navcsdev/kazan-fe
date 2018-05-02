import React, {PureComponent} from 'react';
import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from 'material-ui-icons/Menu';
import {ToolBarHeader, TypographyHeader} from "./styled";
import PopupSignUp from "../../popups/account/PopupSignUp";
import {Auth} from 'aws-amplify';

export default class Header extends PureComponent {
    signOut = async(e) => {
      e.preventDefault();
      Auth.signOut()
          .then(
              sessionStorage.setItem('isLoggedIn', false),
              this.setState(() => {
                  return {
                      logOut: true
                  }
              })
          )
          .catch(err => console.log(err));    
    }
    render() {
      return(
        <AppBar>
          <ToolBarHeader>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <TypographyHeader variant="title" color="inherit">
              KAZAN
            </TypographyHeader>
            <Button onClick={this.signOut}>Logout</Button>
          </ToolBarHeader>
        </AppBar>
      )
    }
}
