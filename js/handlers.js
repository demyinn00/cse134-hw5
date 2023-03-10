async function postHandler() {
  console.log('i was clicked!')
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
}

async function getHandler() {
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
}

async function putHandler() {
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
}

async function deleteHandler() {
  console.log('clicked send inside get!')
  const id = document.querySelector('#id').value;
  const url = `https://httpbin.org/delete?id=${id}`;

  let resOutput = document.querySelector('#resOutput');

  try {
    let response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed DELETE');
    }
    let data = await response.text();
    resOutput.innerText = data;
    resOutput.style.visibility = 'visible';
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

export { postHandler, getHandler, putHandler, deleteHandler };
