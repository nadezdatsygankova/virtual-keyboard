import helpers from './view';
import '../assets/styles/index.css';
import backgroundImg from '../assets/img/background.jpg';

// const { createDiv, createButton, createTextArea, createIcon } = helpers;

// let arrayLetters = ['~`', []];

// const bodyElem = document.querySelector('body');

// let divContForTextArea = createDiv(bodyElem, 'div_textArea_wrapper');
// console.log(divContForTextArea);

// let textArea = createTextArea(divContForTextArea, 'text_area');

// let divContForButtons = createDiv(bodyElem, 'div_wrapper_buttons');
// console.log(divContForButtons);

// const butClass = ['button'];
// const butClassWide = ['button', 'button__wide'];
// const butClassWideExtra = ['button', 'button__wide', 'button__wide_extra'];
// const butClassWideActive = ['button', 'button__wide', 'button__active'];
// const butClassBack = ['button', 'button__wide', 'button__black'];

// let buttonCr = (createButton('i', divContForButtons, butClass, 'button'));

// console.log(buttonCr);

// const buttonWithIcon = (createButton('', divContForButtons, butClassWide, 'button'));
// const iconBut = (createIcon('backspace', buttonWithIcon, 'material-icons'));

// // space_tab
// const buttonWithIconSpace = (createButton('', divContForButtons, butClassWideExtra, 'button'));
// const iconButSpace = (createIcon('space_bar', buttonWithIconSpace, 'material-icons'));

// // caps lock

// const buttonWithIconCapsLock = (createButton('', divContForButtons, butClassWideActive, 'button'));
// const iconButCapsLock = (createIcon('keyboard_capslock', buttonWithIconCapsLock, 'material-icons'));

// const buttonWithIconBlack = (createButton('', divContForButtons, butClassBack, 'button'));
// const iconBlack = (createIcon('check_circle', buttonWithIconBlack, 'material-icons'));

// const Keyboard = {
//   elements: {
//     main: null,
//     keysContainer: null,
//     keys: [],
//   },
//   eventHandlers: {
//     oninput: null,
//     onclose: null,
//   },
//   properties: {
//     value: '',
//     capsLock: false,
//   },
//   init() {
//     // create main elements
//     this.elements.main = document.createElement('div');
//     this.elements.textArea = document.createElement('textArea');
//     this.elements.keysContainer = document.createElement('div');

//     // Setup main elements
//     this.elements.main.classList.add('main');
//     this.elements.textArea.classList.add('text_area');
//     this.elements.keysContainer.classList.add('div_wrapper_buttons');
//     this.elements.keysContainer.appendChild(this.createKeys());
//     this.elements.keys = this.elements.keysContainer.querySelectorAll('.button');
//     // Add to DOM
//     this.elements.main.appendChild(this.elements.textArea);
//     this.elements.main.appendChild(this.elements.keysContainer);
//     document.body.appendChild(this.elements.main);
//     // Automatically use keyboard for elements with .use-keyboard-input

//   },




const Keyboard = {
  elements: {
      main: null,
      keysContainer: null,
      keys: []
  },

  eventHandlers: {
      oninput: null,
      onclose: null
  },

  properties: {
      value: "",
      capsLock: false
  },

  init() {
      // Create main elements
      this.elements.main = document.createElement("div");
      this.elements.keysContainer = document.createElement("div");
      // this.elements.textArea = document.createElement('textArea');

      // Setup main elements
      this.elements.main.classList.add("keyboard", "keyboard--hidden");
      this.elements.keysContainer.classList.add("keyboard__keys");
      this.elements.keysContainer.appendChild(this._createKeys());
      // this.elements.textArea.classList.add('use-keyboard-input');

      this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

      // Add to DOM
      this.elements.main.appendChild(this.elements.keysContainer);
      document.body.appendChild(this.elements.main);
      // this.elements.main.appendChild(this.elements.textArea);

      // Automatically use keyboard for elements with .use-keyboard-input
      document.querySelectorAll(".use-keyboard-input").forEach(element => {
          element.addEventListener("focus", () => {
              this.open(element.value, currentValue => {
                  element.value = currentValue;
              });
          });
      });
  },

  _createKeys() {
      const fragment = document.createDocumentFragment();
      const keyLayout = [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
          "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
          "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
          "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
          "space"
      ];

      // Creates HTML for an icon
      const createIconHTML = (icon_name) => {
          return `<i class="material-icons">${icon_name}</i>`;
      };

      keyLayout.forEach(key => {
          const keyElement = document.createElement("button");
          const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

          // Add attributes/classes
          keyElement.setAttribute("type", "button");
          keyElement.classList.add("keyboard__key");

          switch (key) {
              case "backspace":
                  keyElement.classList.add("keyboard__key--wide");
                  keyElement.innerHTML = createIconHTML("backspace");

                  keyElement.addEventListener("click", () => {
                      this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                      this._triggerEvent("oninput");
                  });

                  break;

              case "caps":
                  keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                  keyElement.innerHTML = createIconHTML("keyboard_capslock");

                  keyElement.addEventListener("click", () => {
                      this._toggleCapsLock();
                      keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                  });

                  break;

              case "enter":
                  keyElement.classList.add("keyboard__key--wide");
                  keyElement.innerHTML = createIconHTML("keyboard_return");

                  keyElement.addEventListener("click", () => {
                      this.properties.value += "\n";
                      this._triggerEvent("oninput");
                  });

                  break;

              case "space":
                  keyElement.classList.add("keyboard__key--extra-wide");
                  keyElement.innerHTML = createIconHTML("space_bar");

                  keyElement.addEventListener("click", () => {
                      this.properties.value += " ";
                      this._triggerEvent("oninput");
                  });

                  break;

              case "done":
                  keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                  keyElement.innerHTML = createIconHTML("check_circle");

                  keyElement.addEventListener("click", () => {
                      this.close();
                      this._triggerEvent("onclose");
                  });

                  break;

              default:
                  keyElement.textContent = key.toLowerCase();

                  keyElement.addEventListener("click", () => {
                      this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                      this._triggerEvent("oninput");
                  });

                  break;
          }

          fragment.appendChild(keyElement);

          if (insertLineBreak) {
              fragment.appendChild(document.createElement("br"));
          }
      });

      return fragment;
  },

  _triggerEvent(handlerName) {
      if (typeof this.eventHandlers[handlerName] == "function") {
          this.eventHandlers[handlerName](this.properties.value);
      }
  },

  _toggleCapsLock() {
      this.properties.capsLock = !this.properties.capsLock;

      for (const key of this.elements.keys) {
          if (key.childElementCount === 0) {
              key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
          }
      }
  },

  open(initialValue, oninput, onclose) {
      this.properties.value = initialValue || "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
      this.properties.value = "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
