import {useEffect, useState} from 'react';
import * as APIService from '../../../services/APIService';

const TasksList = ({children: render}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const allTasks = APIService.getAllTasks();

    setTasks(allTasks);
  }, []);

  return render({tasks});
};

export default TasksList;
