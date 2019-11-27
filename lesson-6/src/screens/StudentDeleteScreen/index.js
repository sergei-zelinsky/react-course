import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  deleteButton: {
    marginLeft: theme.spacing(2),
  },
}));

export default function StudentDeleteScreen() {
  return <Container maxWidth="sm"></Container>;
}
