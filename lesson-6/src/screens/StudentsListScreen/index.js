import React from 'react';
import {List, ListSubheader, Fab, makeStyles} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import StudentsList from '../common/StudentsList';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  list: {
    paddingBottom: theme.spacing(10),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>
        <ListSubheader>Students</ListSubheader>
        <StudentsList>{({students}) => null}</StudentsList>
      </List>
      <Fab
        className={classes.fab}
        color="primary"
        component={Link}
        to="/students/create"
      >
        <AddIcon />
      </Fab>
    </>
  );
};
