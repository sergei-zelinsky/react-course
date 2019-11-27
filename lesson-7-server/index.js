const express = require('express');
const uuid = require('uuid/v1');
let students = require('./students');

const APP_PORT = 3030;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/students', (req, res) => {
  res.send(students);
});

app.get('/students/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  const student = students.find(s => s.id === studentId);
  res.send(student);
});

app.get('/students/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  const student = students.find(s => s.id === studentId);
  res.send(student);
});

app.put('/students', (req, res) => {
  const student = req.body;
  const extendedStudent = {
    ...student,
    id: uuid(),
  };

  students.push(extendedStudent);
  res.send(extendedStudent);
});

app.post('/students/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  const updatedStudent = {...req.body, id: studentId};

  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex !== -1) {
    students[studentIndex] = updatedStudent;
  }

  res.send(updatedStudent);
});

app.delete('/students/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex !== -1) {
    const [deletedStudent] = students.splice(studentIndex, 1);
    res.send(deletedStudent);
  } else {
    res.send(null);
  }
});

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}!`));
