import uuid from 'uuid/v1';

let students = [
  {
    id: '5ddac0be49c3b1968b8c98c8',
    avatar: 'https://api.adorable.io/avatars/285/Slater',
    name: 'Callie Andrews',
    address: '823 Brightwater Court, Springhill, Utah, 8664',
  },
  {
    id: '5ddac0be8e1d6d2b156775a0',
    avatar: 'https://api.adorable.io/avatars/285/Owens',
    name: 'Kaitlin French',
    address: '806 Debevoise Avenue, Lowell, Hawaii, 4221',
  },
  {
    id: '5ddac0bef3993288366b217c',
    avatar: 'https://api.adorable.io/avatars/285/Hobbs',
    name: 'Clay Barber',
    address: '767 Baltic Street, Klagetoh, Illinois, 2988',
  },
  {
    id: '5ddac0be7ec6623e9fe60672',
    avatar: 'https://api.adorable.io/avatars/285/Ramos',
    name: 'Whitehead Trevino',
    address: '589 McClancy Place, Venice, Iowa, 318',
  },
  {
    id: '5ddac0be30ff8c2bff467893',
    avatar: 'https://api.adorable.io/avatars/285/Kirkland',
    name: 'Mccarty Wall',
    address: '748 Mill Street, Blanco, Northern Mariana Islands, 8829',
  },
  {
    id: '5ddac0be789ce6108c55e437',
    avatar: 'https://api.adorable.io/avatars/285/Oneill',
    name: 'Coffey Whitney',
    address: '364 School Lane, Finderne, North Carolina, 9282',
  },
  {
    id: '5ddac0bead305e253f377670',
    avatar: 'https://api.adorable.io/avatars/285/Brown',
    name: 'Bartlett Armstrong',
    address: '985 Dobbin Street, Wakarusa, Vermont, 2665',
  },
];

let tasks = [
  {
    id: '9jwer209jg3f1968b8c98c8',
    name: 'React TODO homework',
    details:
      'Write a simple todo app with edit, delete and filter functionality',
    assigned: '',
  },
  {
    id: 'web9j349ne9rbno93mafba3',
    name: 'Advanced calculus homework',
    details: 'Solve tasks №139, №140 from the book',
    assigned: '',
  },
  {
    id: '239j4blsdih2dsin3rvnsl2',
    name: 'Physics lab №10',
    details: 'Experiment with osciloscope simulator to get circle on screen',
    assigned: '',
  },
];

export const getAllStudents = () => {
  return students;
};

export const getStudent = studentId => {
  const student = students.find(s => s.id === studentId);

  return student;
};

export const addStudent = student => {
  const extendedStudent = {
    ...student,
    id: uuid(),
  };

  students.push(extendedStudent);

  return extendedStudent;
};

export const updateStudent = (studentId, updatedStudent) => {
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex !== -1) {
    students[studentIndex] = updatedStudent;
  }

  return updatedStudent;
};

export const deleteStudent = studentId => {
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex !== -1) {
    const [deletedStudent] = students.splice(studentIndex, 1);

    const relatedTasks = tasks.filter(
      task => task.assigned === deletedStudent.id
    );

    relatedTasks.forEach(task => {
      updateTask(task.id, {
        ...task,
        assigned: '',
      });
    });

    return deletedStudent;
  }

  return null;
};

export const getAllTasks = () => {
  return tasks;
};

export const getTask = taskId => {
  const task = tasks.find(t => t.id === taskId);

  return task;
};

export const addTask = task => {
  const extendedTask = {
    ...task,
    id: uuid(),
  };

  tasks.push(extendedTask);

  return extendedTask;
};

export const updateTask = (taskId, updatedTask) => {
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
  }

  return updatedTask;
};

export const deleteTask = taskId => {
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex !== -1) {
    const [deletedTask] = tasks.splice(taskIndex, 1);

    return deletedTask;
  }

  return null;
};
