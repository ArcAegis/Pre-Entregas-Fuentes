const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const cerrarModalBtn = document.getElementById('cerrarModalBtn');
const agregarBtn = document.getElementById('agregarBtn');
const tablaBody = document.getElementById('tabla-body');
let idCounter = 1;
let editingRow = null;

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  editingRow = null;
  clearInputFields();
});

cerrarModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  clearInputFields();
});

tablaBody.addEventListener('click', event => {
  if (event.target.classList.contains('editarBtn')) {
    const id = event.target.getAttribute('data-id');
    editingRow = tablaBody.querySelector(`tr[data-id="${id}"]`);
    const nombre = editingRow.querySelector('td:nth-child(2)').textContent;
    const apellido = editingRow.querySelector('td:nth-child(3)').textContent;
    const edad = editingRow.querySelector('td:nth-child(4)').textContent;

    document.getElementById('edit-id').value = id;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('edad').value = edad;

    modal.style.display = 'flex';
  } else if (event.target.classList.contains('borrarBtn')) {
    const id = event.target.getAttribute('data-id');
    const rowToDelete = tablaBody.querySelector(`tr[data-id="${id}"]`);
    tablaBody.removeChild(rowToDelete);
  }
});

agregarBtn.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;

  if (editingRow === null) {
    // Agregar nueva persona
    if (nombre && apellido && edad) {
      const newRow = createPersonRow(idCounter, nombre, apellido, edad);
      tablaBody.appendChild(newRow);
      idCounter++;
      clearInputFields();
      modal.style.display = 'none';
    }
  } else {
    // Editar persona existente
    const id = editingRow.querySelector('td:nth-child(1)').textContent;
    updatePersonRow(editingRow, id, nombre, apellido, edad);
    editingRow = null;
    clearInputFields();
    modal.style.display = 'none';
  }
});

function clearInputFields() {
  document.getElementById('edit-id').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('edad').value = '';
}

function createPersonRow(id, nombre, apellido, edad) {
  const newRow = document.createElement('tr');
  newRow.setAttribute('data-id', id);
  newRow.innerHTML = `
    <td>${id}</td>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>
      <button class="editarBtn" data-id="${id}">Editar</button>
      <button class="borrarBtn" data-id="${id}">Borrar</button>
    </td>
  `;
  return newRow;
}

function updatePersonRow(row, id, nombre, apellido, edad) {
  row.innerHTML = `
    <td>${id}</td>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>
      <button class="editarBtn" data-id="${id}">Editar</button>
      <button class="borrarBtn" data-id="${id}">Borrar</button>
    </td>
  `;
}