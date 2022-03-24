import './list.js';
import './form.js';

history.replaceState({ method: 'list' }, '', '/list');

document.addEventListener('DOMContentLoaded', () => {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');

  // edit
  pwList.addEventListener('edit', (e) => {
    edit(e.detail);
    history.pushState({ method: 'edit', id: e.detail }, '', `/edit/${e.detail}`);
  });

  // save
  pwForm.addEventListener('save', (e) => {
    list();
    history.pushState({ method: 'list' }, '', '/list');
  });

  // new
  newButton.addEventListener('click', () => {
    create();
    history.pushState({ method: 'new' }, '', '/new');

  });
});

window.onpopstate = (e) => {
  switch (e.state.method) {
    case 'edit':
      edit(e.state.id);
      break;
    case 'new':
      create();
      break;
    case 'list':
    default:
      list();
      break;
  }
}


function list() {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');

  pwList.setAttribute('update', Date.now());
  pwList.style.display = 'block';
  newButton.style.display = 'block';
  pwForm.style.display = 'none';
}
function edit(id) {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');

  pwForm.setAttribute('id', id);
  pwList.style.display = 'none';
  newButton.style.display = 'none';
  pwForm.style.display = 'block';
}

function create() {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');

  pwForm.setAttribute('id', '');
  pwList.style.display = 'none';
  newButton.style.display = 'none';
  pwForm.style.display = 'block';
}
