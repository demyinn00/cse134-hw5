import { postForm, getForm, putForm, deleteForm } from '/js/methodtest.js'

function init() {
  const requestForm = document.querySelector('#requestForm');
  const resOutput = document.querySelector('#resOutput');

  requestForm.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      const buttonId = event.target.id;
      resOutput.style.visibility = 'hidden';

      switch (buttonId) {
        case 'postBtn':
          postForm();
          break;
        case 'getBtn':
          getForm();
          break;
        case 'putBtn':
          putForm();
          break;
        case 'deleteBtn':
          deleteForm();
          break;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
