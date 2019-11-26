let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3030/students');

xhr.send();

xhr.onload = function() {
  if (xhr.status == 200) {
    // manipulations with xhr.response
  }
};
