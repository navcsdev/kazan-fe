import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from "react-router-dom";
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

export default () => (
  <AppBar position="static">
    <Toolbar>         
      <Typography variant="title" color="inherit">
        KAZAN
      </Typography>
      <Link to={'/login'}>
        <Button color="inherit">Login</Button>
      </Link>
    </Toolbar>
  </AppBar>
);
