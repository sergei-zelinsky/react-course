import React, {useEffect, useState, useCallback} from 'react';
import * as APIService from '../../services/APIService';
import {
  Container,
  Typography,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';
import {Form, Field} from 'react-final-form';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  field: {
    marginBottom: theme.spacing(2),
  },
}));

const StudentScreen = ({match, history}) => {
  const studentId = match.params.studentId;
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" className={classes.title}>
        {studentId ? 'Update Student' : 'Create Student'}
      </Typography>
    </Container>
  );
};

export default StudentScreen;
