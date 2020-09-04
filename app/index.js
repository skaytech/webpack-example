const greet = () => {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText = 'Greetings!!';
  div.appendChild(h1);

  document.body.appendChild(div);
};

window.addEventListener('DOMContentLoaded', greet);
