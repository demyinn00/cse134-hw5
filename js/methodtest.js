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
  sendBtn.addEventListener('click', async () => {
    const id = document.querySelector('#id').value;
    const articleName = document.querySelector('#articleName').value;
    const articleBody = document.querySelector('#articleBody').value;
    const date = new Date().toLocaleDateString("en-US");
    const url = "https://httpbin.org/post";

    try {
      let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id,
          articleName,
          articleBody,
          date
        })
      });
      let data = await response.text();
      resOutput.innerText = data;
      resOutput.style.visibility = 'visible';
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  });
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
  sendBtn.addEventListener('click', async () => {
    console.log('clicked send inside get!')
    const id = document.querySelector('#id').value;
    const url = `https://httpbin.org/get?id=${id}`;

    let resOutput = document.querySelector('#resOutput');

    try {
      let response = await fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Failed GET');
      }
      let data = await response.text();
      resOutput.innerText = data;
      resOutput.style.visibility = 'visible';
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  });
}

async function putForm() {
  let putForm = document.createElement('dialog');
  putForm.innerHTML = `
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

  document.body.appendChild(putForm);
  putForm.showModal();

  let sendBtn = document.querySelector('#sendBtn');
  sendBtn.addEventListener('click', async () => {
    const id = document.querySelector('#id').value;
    const articleName = document.querySelector('#articleName').value;
    const articleBody = document.querySelector('#articleBody').value;
    const date = new Date().toLocaleDateString("en-US");
    const url = `https://httpbin.org/put?id=${id}`;

    try {
      let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          articleName,
          articleBody,
          date
        })
      });
      let data = await response.text();
      resOutput.innerText = data;
      resOutput.style.visibility = 'visible'; 
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  });
}

export { postForm, getForm, putForm };