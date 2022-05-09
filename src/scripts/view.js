function createDiv(container, className) {
  const div = document.createElement('div');
  div.classList.add(className);
  container.append(div);
  return div;
}

function createButton(letter, container, className, typeButton) {
  const button = document.createElement('button');
  for (let i = 0; i < className.length; i++) {
    button.classList.add(className[i]);
  }
  button.textContent = letter;
  button.type = typeButton;
  container.append(button);
  return button;
}

function createTextArea(container, className) {
  const textarea = document.createElement('textarea');
  textarea.classList = className;
  container.append(textarea);
  return textarea;
}
function createParagraph(container, className) {
  const par = document.createElement('p');
  par.classList = className;
  container.append(par);
  return par;
}


export default {
  createDiv,
  createButton,
  createTextArea,
  createParagraph
};
