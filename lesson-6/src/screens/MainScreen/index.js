import React from 'react';
import {Container, Link, Box} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

const MainScreen = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Link component={RouterLink} to="/students" variant="h4">
          Students
        </Link>
      </Box>
      <Box>
        <Link component={RouterLink} to="/tasks" variant="h4">
          Tasks
        </Link>
      </Box>
    </Container>
  );
};

export default MainScreen;
