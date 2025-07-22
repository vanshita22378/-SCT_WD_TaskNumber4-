
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = document.getElementById('taskInput').value;
  const taskDateTime = document.getElementById('taskDateTime').value;

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${taskText}</strong><br>
    <small>${new Date(taskDateTime).toLocaleString()}</small><br>
    <button onclick="completeTask(this)"></button>
    <button onclick="editTask(this)">✏</button>
    <button onclick="deleteTask(this)">🗑</button>
  `;
  taskList.appendChild(li);
  taskForm.reset();
});

function completeTask(btn) {
  btn.parentElement.classList.toggle('completed');
}

function editTask(btn) {
  const li = btn.parentElement;
  const text = prompt('Edit task', li.children[0].innerText);
  if (text) li.children[0].innerText = text;
}

function deleteTask(btn) {
  btn.parentElement.remove();
}