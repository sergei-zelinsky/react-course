import React, {useEffect, useState, useCallback} from 'react';
import * as APIService from '../../services/APIService';
import {Link} from 'react-router-dom';
import StudentList from '../common/StudentsList';
import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
  submitButton: {
    marginBottom: theme.spacing(2),
  },
}));

const TaskScreen = ({match, history}) => {
  const taskId = match.params.taskId;
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (taskId) {
      const currentTask = APIService.getTask(taskId);

      setTask(currentTask);
    }
  }, [taskId]);

  const handleFormSubmit = useCallback(
    values => {
      if (taskId) {
        APIService.updateTask(taskId, values);
      } else {
        APIService.addTask(values);
      }

      history.push('/tasks');
    },
    [taskId, history]
  );

  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" className={classes.title}>
        {taskId ? 'Update Task' : 'Create Task'}
      </Typography>
      <Form onSubmit={handleFormSubmit} initialValues={task}>
        {({handleSubmit}) => (
          <>
            <Field name="name">
              {({input}) => (
                <TextField
                  className={classes.field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  {...input}
                />
              )}
            </Field>
            <Field name="details">
              {({input}) => (
                <TextField
                  className={classes.field}
                  label="Details"
                  variant="outlined"
                  fullWidth
                  {...input}
                />
              )}
            </Field>
            <StudentList>
              {({students}) => (
                <Field name="assigned">
                  {({input}) => (
                    <FormControl
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    >
                      <InputLabel id="select-label" ref={inputLabel}>
                        Assigned student
                      </InputLabel>
                      <Select
                        labelId="select-label"
                        labelWidth={labelWidth}
                        {...input}
                      >
                        <MenuItem value="">None</MenuItem>
                        {students.map(student => (
                          <MenuItem value={student.id} key={student.id}>
                            {student.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </Field>
              )}
            </StudentList>
            <Button
              onClick={handleSubmit}
              fullWidth
              color="primary"
              variant="contained"
              size="large"
              className={classes.submitButton}
            >
              Submit
            </Button>
            <Button
              component={Link}
              to={`/tasks/delete/${taskId}`}
              fullWidth
              color="secondary"
              variant="outlined"
              size="large"
            >
              Delete task
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default TaskScreen;
