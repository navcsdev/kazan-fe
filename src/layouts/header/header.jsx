import React, {PureComponent} from 'react';
import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from 'material-ui-icons/Menu';
import {ToolBarHeader, TypographyHeader} from "./styled";
import PopupSignUp from "../../popups/account/PopupSignUp";

export default class Header extends PureComponent {
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
            <Button color="inherit">Sign-in</Button>
            <PopupSignUp color="inherit">Sign-up</PopupSignUp>
          </ToolBarHeader>
        </AppBar>
      )
    }
}
