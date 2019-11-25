import {useState} from 'react';
import * as APIService from '../../../services/APIService';

const StudentsList = ({children: render}) => {
  const [students, setStudents] = useState([]);

  return render({students});
};

export default StudentsList;
