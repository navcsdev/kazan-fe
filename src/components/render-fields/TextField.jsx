import React from 'react';
import TextField from "material-ui/TextField";

export default ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
      label={label}
      {...input}
      {...custom}
  />
)