import './list.js';
import './form.js';

document.addEventListener('DOMContentLoaded', () => {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');

  // edit
  pwList.addEventListener('edit', (e) => {
    pwForm.setAttribute('id', e.detail);
    pwList.style.display = 'none';
    newButton.style.display = 'none';
    pwForm.style.display = 'block';
  });

  // save
  pwForm.addEventListener('save', (e) => {
    pwList.setAttribute('update', Date.now());
    pwList.style.display = 'block';
    newButton.style.display = 'block';
    pwForm.style.display = 'none';
  });

  // new
  newButton.addEventListener('click', () => {
    pwForm.setAttribute('id', '');
    pwList.style.display = 'none';
    newButton.style.display = 'none';
    pwForm.style.display = 'block';
  });
});