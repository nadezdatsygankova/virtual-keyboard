import helpers from './view';
import '../../assets/styles/index.css';
// import backgroundImg from '../assets/img/background.jpg';

const {
  createDiv, createButton, createTextArea, createParagraph,
} = helpers;

const keyLayoutEnglish = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
  'fn', 'cont', 'opt', 'com', 'space', 'com', 'opt', '◄', '▼', '►'];
const keyLayoutRussian = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',
  'fn', 'cont', 'opt', 'com', 'space', 'com', 'opt', '◄', '▼', '►'];

const bodyElem = document.querySelector('body');
const textAreaArray = [];

const divContForTextArea = createDiv(bodyElem, 'div_textArea_wrapper');

const textArea = createTextArea(divContForTextArea, 'text_area');
textAreaArray.push(textArea.value);
const divContForButtons = createDiv(bodyElem, 'div_wrapper_buttons');
const divContInformation = createDiv(bodyElem, 'div_information');
const par = createParagraph(divContInformation, 'information');
par.innerHTML = 'Operation system Mac.<br> Switching a language -> Click mouse button <strong>fn</strong>';
let language = 'eng';
let isCapsLock = false;
let isShift = false;
const butClass = ['button'];

function render(keyLayout) {
  divContForButtons.innerHTML = '';
  if (keyLayout === keyLayoutEnglish) {
    language = 'eng';
  } else {
    language = 'rus';
  }
  for (let i = 0; i < keyLayout.length; i += 1) {
    const buttonCr = (createButton(keyLayout[i], divContForButtons, butClass, 'button'));
    if (keyLayout[i].toLowerCase() === 'tab' || keyLayout[i].toLowerCase() === 'shift' || keyLayout[i].toLowerCase() === 'com' || keyLayout[i].toLowerCase() === 'caps') {
      buttonCr.classList.add('button__wide');
      const classListName = keyLayout[i].toLowerCase();
      buttonCr.classList.add(classListName);
      buttonCr.innerText = keyLayout[i].toLowerCase();
    } else if (keyLayout[i].toLowerCase() === 'cont' || keyLayout[i].toLowerCase() === 'opt') {
      buttonCr.innerText = keyLayout[i].toLowerCase();
      buttonCr.classList.add(keyLayout[i].toLowerCase());
    } else if (keyLayout[i].toLowerCase() === 'space') {
      buttonCr.classList.add('button__wide_extra', 'space');
      buttonCr.innerText = '';
    } else if (keyLayout[i].toLowerCase() === 'fn') {
      buttonCr.classList.add('fn');
      buttonCr.innerText = 'fn';
      const shiftRightY = (buttonCr.previousElementSibling);
      const brEl = document.createElement('br');
      shiftRightY.after(brEl);
    }

    switch (keyLayout[i].toLowerCase()) {
      case 'delete':
        buttonCr.classList.add('button__wide', 'delete');
        buttonCr.innerText = 'delete';
        divContForButtons.appendChild(document.createElement('br'));
        break;
      case '\\':
        divContForButtons.appendChild(document.createElement('br'));
        break;
      case 'enter':
        buttonCr.classList.add('button__wide', 'enter');
        buttonCr.innerText = 'enter';
        divContForButtons.appendChild(document.createElement('br'));
        break;
      case 'caps':
        buttonCr.classList.add('button__wide', 'caps');
        buttonCr.innerText = 'caps';
        break;
      case '▲':
        buttonCr.classList.add('arrowUp');
        break;
      case '◄':
        buttonCr.classList.add('arrowLeft');
        break;
      case '▼':
        buttonCr.classList.add('arrowDown');
        break;
      case '►':
        buttonCr.classList.add('arrowRight');
        break;
      default:
        break;
    }
  }
}

// render first layout
render(keyLayoutEnglish);

const keys = document.querySelectorAll('.button');
const spaceKey = document.querySelector('.space');
const deleteButton = document.querySelector('.delete');
const tabButton = document.querySelector('.tab');
const capsButton = document.querySelector('.caps');

const shift = document.querySelectorAll('.shift');
const shiftLeft = shift[0];
const shiftRight = shift[1];
const controlButton = document.querySelector('.cont');
const opt = document.querySelectorAll('.opt');
const optLeft = opt[0];
const optRight = opt[1];
const com = document.querySelectorAll('.com');
const comLeft = com[0];
const comRight = com[1];
const arrowUp = document.querySelector('.arrowUp');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowDown = document.querySelector('.arrowDown');
const arrowRight = document.querySelector('.arrowRight');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'CapsLock') {
    isCapsLock = !isCapsLock;
    if (language === 'eng') {
      if (isCapsLock) {
        const arrayUpper = [];
        keyLayoutEnglish.forEach((element) => {
          arrayUpper.push(element.toUpperCase());
        });
        render(arrayUpper);
        language = 'eng';
      } else {
        render(keyLayoutEnglish);
      }
    } else if (language === 'rus') {
      if (isCapsLock) {
        const arrayUpper = [];
        keyLayoutRussian.forEach((element) => {
          arrayUpper.push(element.toUpperCase());
        });
        render(arrayUpper);
        language = 'rus';
      } else {
        render(keyLayoutRussian);
      }
    }
  }
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    } else if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
    } else if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
    } else if (e.code === 'AltLeft') {
      optLeft.classList.add('active');
    } else if (e.code === 'AltRight') {
      optRight.classList.add('active');
    } else if (e.code === 'MetaLeft') {
      comLeft.classList.add('active');
    } else if (e.code === 'MetaRight') {
      comRight.classList.add('active');
    } else if (e.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    } else if (e.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    } else if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    } else if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    } else if (e.code === 'Backspace') {
      deleteButton.classList.add('active');
    }

    if (e.code === 'CapsLock') {
      capsButton.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      controlButton.classList.add('active');
    }
    if (e.code === 'Tab') {
      tabButton.classList.add('active');
    }
    setTimeout(() => {
      capsButton.classList.remove('active');
    }, 1000);
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Backspace') {
    textAreaArray.pop();
  } else if (e.key === 'Enter') {
    textAreaArray.push('\r\n');
  } else if (e.key === 'Shift' || e.key === 'Meta') {
    textAreaArray.push('');
  } else if (e.key === 'Alt' || e.key === 'ArrowUp' || e.key === 'Control') {
    textAreaArray.push('');
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    textAreaArray.push('');
  } else if (e.key === 'Tab') {
    for (let i = 0; i < 4; i += 1) {
      textAreaArray.push(' ');
    }
  } else if (e.key === 'CapsLock') {
    textAreaArray.push('');
  } else {
    textAreaArray.push(e.key);
  }

  let elements = '';
  textAreaArray.forEach((element) => {
    elements += element;
  });
  textArea.value = elements;
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key.toLowerCase() === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    } else if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.remove('remove');
    } else if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
    } else if (e.code === 'AltLeft') {
      optLeft.classList.remove('active');
      optLeft.classList.remove('remove');
    } else if (e.code === 'AltRight') {
      optRight.classList.remove('active');
      optRight.classList.remove('remove');
    } else if (e.code === 'MetaLeft') {
      comLeft.classList.remove('active');
      comLeft.classList.remove('remove');
    } else if (e.code === 'MetaRight') {
      comRight.classList.remove('active');
      comRight.classList.remove('remove');
    } else if (e.code === 'Backspace') {
      deleteButton.classList.remove('active');
      deleteButton.classList.add('remove');
    } else if (e.code === 'ControlLeft') {
      controlButton.classList.remove('active');
      controlButton.classList.add('remove');
    } else if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
      arrowUp.classList.add('remove');
    } else if (e.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
      arrowDown.classList.add('remove');
    } else if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.add('remove');
    } else if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.add('remove');
    } else if (e.code === 'Tab') {
      tabButton.classList.remove('active');
      tabButton.classList.add('remove');
      textArea.focus();
    }
    // } else {
    //   textAreaArray.push(e.key);
    // }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});

window.addEventListener('click', (e) => {
  if (e.target.type === 'button') {
    if (e.target.innerText.toLowerCase() === 'delete') {
      textAreaArray.pop();
      deleteButton.classList.add('active');
      setTimeout(() => {
        deleteButton.classList.remove('active');
      }, 300);
    } else if (e.target.innerText.toLowerCase() === 'caps') {
      isCapsLock = !isCapsLock;
      if (language === 'eng') {
        if (isCapsLock) {
          const arrayUpper = [];
          keyLayoutEnglish.forEach((element) => {
            arrayUpper.push(element.toUpperCase());
          });
          render(arrayUpper);
          language = 'eng';
        } else {
          render(keyLayoutEnglish);
        }
      } else if (language === 'rus') {
        if (isCapsLock) {
          const arrayUpper = [];
          keyLayoutRussian.forEach((element) => {
            arrayUpper.push(element.toUpperCase());
          });
          render(arrayUpper);
          language = 'rus';
        } else {
          render(keyLayoutRussian);
        }
      }
    } else if (e.target.innerText.toLowerCase() === 'shift') {
      isShift = !isShift;
      if (language === 'eng') {
        if (isShift) {
          const arrayUpper = [];
          keyLayoutEnglish.forEach((element) => {
            arrayUpper.push(element.toUpperCase());
          });
          render(arrayUpper);
          language = 'eng';
          isShift = true;
        } else {
          render(keyLayoutEnglish);
          isShift = false;
        }
      } else if (language === 'rus') {
        if (isShift) {
          const arrayUpper = [];
          keyLayoutRussian.forEach((element) => {
            arrayUpper.push(element.toUpperCase());
          });
          render(arrayUpper);
          language = 'rus';
          isShift = !isShift;
        } else {
          render(keyLayoutRussian);
          isShift = !isShift;
        }
      }
      shift[0].classList.add('active');
    } else if (e.target.innerText.toLowerCase() === 'fn') {
      if (language === 'eng') {
        render(keyLayoutRussian);
        language = 'rus';
      } else {
        render(keyLayoutEnglish);
      }
    } else if (e.target.innerText.toLowerCase() === 'tab') {
      for (let i = 0; i < 4; i += 1) {
        textAreaArray.push(' ');
      }
    } else if (e.target.innerText.toLowerCase() === '') {
      textAreaArray.push(' ');
    } else if (e.target.innerText.toLowerCase() === 'enter') {
      textAreaArray.push('\r\n');
    } else if (e.target.innerText.toLowerCase() === 'cont' || e.target.innerText.toLowerCase() === 'com' || e.target.innerText.toLowerCase() === 'opt') {
      textAreaArray.push('');
    } else {
      textAreaArray.push(e.target.innerText);
    }
    let elements = '';
    textAreaArray.forEach((element) => {
      elements += element;
    });
    textArea.value = elements;
  }
});
