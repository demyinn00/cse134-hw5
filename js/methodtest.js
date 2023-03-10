import { postHandler, getHandler, putHandler, deleteHandler } from './handlers.js'

async function postForm() {
  let postDialog = document.createElement('dialog');
  postDialog.innerHTML = `
    <form method="dialog" class="dialogForm">
      <label for="id">ID:</label>
      <input type="text" id="id" name="id">
      <label for="articleName">Article Name:</label>
      <input type="text" id="articleName" name="articleName">
      <label for="articleBody">Article Body:</label>
      <textarea id="articleBody" name="articleBody"></textarea>
      <input type="hidden" id="date" name="date">
      <button type="submit" id="cancelBtn">Cancel</button>
      <button type="submit" id="sendBtn">Send</button>
    </form>
  `;

  document.body.appendChild(postDialog);
  postDialog.showModal();

  let sendBtn = document.querySelector('#sendBtn');
  sendBtn.removeEventListener('click', postHandler);
  sendBtn.addEventListener('click', postHandler);
}

async function getForm() {
  let getDialog = document.createElement('dialog');
  getDialog.innerHTML = `
    <form method="dialog" class="dialogForm">
      <label for="id">ID:</label>
      <input type="text" id="id" name="id">
      <button type="submit" id="cancelBtn">Cancel</button>
      <button type="submit" id="sendBtn">Send</button>
    </form>
  `;

  document.body.appendChild(getDialog);
  getDialog.showModal();

  let sendBtn = document.querySelector('#sendBtn');
  sendBtn.removeEventListener('click', getHandler);
  sendBtn.addEventListener('click', getHandler);
}

async function putForm() {
  let putDialog = document.createElement('dialog');
  putDialog.innerHTML = `
    <form method="dialog" class="dialogForm">
      <label for="id">ID:</label>
      <input type="text" id="id" name="id">
      <label for="articleName">Article Name:</label>
      <input type="text" id="articleName" name="articleName">
      <label for="articleBody">Article Body:</label>
      <textarea id="articleBody" name="articleBody"></textarea>
      <input type="hidden" id="date" name="date">
      <button type="submit" id="cancelBtn">Cancel</button>
      <button type="submit" id="sendBtn">Send</button>
    </form>
  `;

  document.body.appendChild(putDialog);
  putDialog.showModal();

  let sendBtn = document.querySelector('#sendBtn');
  sendBtn.removeEventListener('click', putHandler);
  sendBtn.addEventListener('click', putHandler);
}

async function deleteForm() {
  let deleteDialog = document.createElement('dialog');
  deleteDialog.innerHTML = `
    <form method="dialog" class="dialogForm">
      <label for="id">ID:</label>
      <input type="text" id="id" name="id">
      <button type="submit" id="cancelBtn">Cancel</button>
      <button type="submit" id="sendBtn">Send</button>
    </form>
  `;

  document.body.appendChild(deleteDialog);
  deleteDialog.showModal();

  let sendBtn = document.querySelector('#sendBtn');
  sendBtn.removeEventListener('click', deleteHandler);
  sendBtn.addEventListener('click', deleteHandler);
}

export { postForm, getForm, putForm, deleteForm };