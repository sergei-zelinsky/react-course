import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Fab,
  makeStyles,
} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import TasksList from '../common/TasksList';
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
        <ListSubheader>Tasks</ListSubheader>
        <TasksList>
          {({tasks}) =>
            tasks.map(task => (
              <ListItem
                key={task.id}
                button
                component={Link}
                to={`/tasks/${task.id}`}
              >
                <ListItemText primary={task.name} secondary={task.details} />
              </ListItem>
            ))
          }
        </TasksList>
      </List>
      <Fab
        className={classes.fab}
        color="primary"
        component={Link}
        to="/tasks/create"
      >
        <AddIcon />
      </Fab>
    </>
  );
};
