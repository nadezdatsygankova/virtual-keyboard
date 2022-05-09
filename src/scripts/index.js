import helpers from './view';
import '../../assets/styles/index.css';
// import backgroundImg from '../assets/img/background.jpg';

const { createDiv, createButton, createTextArea,createParagraph } = helpers;

const keyLayoutEnglish = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "shift",
    "fn", "cont", "opt", "com", "space", "com", "opt", "◄", "▼", "►"];
const keyLayoutRussian = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
    "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "shift",
    "fn", "cont", "opt", "com", "space", "com", "opt", "◄", "▼", "►"];

const bodyElem = document.querySelector('body');
let textAreaArray = [];

let divContForTextArea = createDiv(bodyElem, 'div_textArea_wrapper');

let textArea = createTextArea(divContForTextArea, 'text_area');

let divContForButtons = createDiv(bodyElem, 'div_wrapper_buttons');
let divContInformation = createDiv(bodyElem, 'div_information');
let par = createParagraph(divContInformation,'information')
par.innerHTML ='Operation system Mac.<br> Switching a language -> Click mouse button <strong>fn</strong>'
let language = "eng";
let isCapsLock = false;
let isShift = false;
const butClass = ['button'];
//render first layout
render(keyLayoutEnglish);

let keys = document.querySelectorAll('.button');
let spaceKey = document.querySelector('.space');
let deleteButton = document.querySelector('.delete');
let capsButton = document.querySelector('.caps');

let shift = document.querySelectorAll('.shift');
let shiftLeft = shift[0];
let shiftRight = shift[1];
let controlButton = document.querySelector('.cont');
let opt = document.querySelectorAll('.opt');
let optLeft = opt[0];
let optRight = opt[1];
let com = document.querySelectorAll('.com');
let comLeft = com[0];
let comRight = com[1];
let arrowUp = document.querySelector(".arrowUp");
let arrowLeft = document.querySelector(".arrowLeft");
let arrowDown = document.querySelector(".arrowDown");
let arrowRight = document.querySelector(".arrowRight");

function render(keyLayout) {
    divContForButtons.innerHTML = '';
    if (keyLayout === keyLayoutEnglish) {
        language = "eng";
    }
    else {
        language = "rus";
    }
    for (let i = 0; i < keyLayout.length; i++) {
        let buttonCr = (createButton(keyLayout[i], divContForButtons, butClass, 'button'));
        if (keyLayout[i].toLowerCase() === "tab" || keyLayout[i].toLowerCase() === "shift" || keyLayout[i].toLowerCase() === "com" || keyLayout[i].toLowerCase() === "caps") {
            buttonCr.classList.add('button__wide');
            let classListName = keyLayout[i].toLowerCase();
            buttonCr.classList.add(classListName);
            buttonCr.innerText = keyLayout[i].toLowerCase();
        }
        else if (keyLayout[i].toLowerCase() === "cont" || keyLayout[i].toLowerCase() === "opt") {
            buttonCr.innerText = keyLayout[i].toLowerCase();
            buttonCr.classList.add(keyLayout[i].toLowerCase());
        }
        else if (keyLayout[i].toLowerCase() === "space") {
            buttonCr.classList.add('button__wide_extra', 'space');
            buttonCr.innerText = '';
        }
        else if (keyLayout[i].toLowerCase() === "fn") {
            buttonCr.classList.add('fn');
            buttonCr.innerText = 'fn';
            let shiftRight = (buttonCr.previousElementSibling);
            let brEl = document.createElement('br');
            shiftRight.after(brEl)
        }

        switch (keyLayout[i].toLowerCase()) {
            case "delete":
                buttonCr.classList.add('button__wide', 'delete');
                buttonCr.innerText = 'delete';
                divContForButtons.appendChild(document.createElement('br'));
                break;
            case "\\":
                divContForButtons.appendChild(document.createElement('br'));
                break;
            case "enter":
                buttonCr.classList.add('button__wide', 'enter');
                buttonCr.innerText = 'enter';
                divContForButtons.appendChild(document.createElement('br'));
                break;
            case "caps":
                buttonCr.classList.add('button__wide', 'caps');
                buttonCr.innerText = 'caps';
                break;
            case "▲":
                buttonCr.classList.add('arrowUp');
                break;
            case "◄":
                buttonCr.classList.add('arrowLeft');
                break;
            case "▼":
                buttonCr.classList.add('arrowDown');
                break;
            case "►":
                buttonCr.classList.add('arrowRight');
                break;
            default:
                break;
        }
    }

}





for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {

    console.log(e.code);
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if (e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        else if (e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
        }
        else if (e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
        }
        else if (e.code == 'AltLeft') {
            optLeft.classList.add('active')
        }
        else if (e.code == 'AltRight') {
            optRight.classList.add('active')
        }
        else if (e.code == 'MetaLeft') {
            comLeft.classList.add('active')
        }
        else if (e.code == 'MetaRight') {
            comRight.classList.add('active')
        }
        else if (e.code == 'ArrowUp') {
            arrowUp.classList.add('active')
        }
        else if (e.code == 'ArrowDown') {
            arrowDown.classList.add('active')
        }
        else if (e.code == 'ArrowLeft') {
            arrowLeft.classList.add('active')
        }
        else if (e.code == 'ArrowRight') {
            arrowRight.classList.add('active')
        }

        else if (e.code === 'Backspace') {
            deleteButton.classList.add('active')
        }

        if (e.code === 'CapsLock') {

            capsButton.classList.add('active');
            // workCapsLock();
        }
        if (e.code === 'ControlLeft') {
            controlButton.classList.add('active');
        }
        setTimeout(() => {
            capsButton.classList.remove('active');
        }, 1000)
    }
})

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key.toLowerCase() == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if (e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if (e.code === 'ShiftLeft') {
            shiftRight.classList.remove('active')
            shiftRight.classList.remove('remove')
        }
        if (e.code === 'ShiftRight') {
            shiftLeft.classList.remove('active')
            shiftLeft.classList.remove('remove')
        }
        if (e.code === 'AltLeft') {
            optLeft.classList.remove('active')
            optLeft.classList.remove('remove')
        }
        if (e.code === 'AltRight') {
            optRight.classList.remove('active')
            optRight.classList.remove('remove')
        }
        if (e.code === 'MetaLeft') {
            comLeft.classList.remove('active')
            comLeft.classList.remove('remove')
        }
        if (e.code === 'MetaRight') {
            comRight.classList.remove('active')
            comRight.classList.remove('remove')
        }
        if (e.code == 'Backspace') {
            deleteButton.classList.remove('active');
            deleteButton.classList.add('remove')
        }
        if (e.code === 'ControlLeft') {
            controlButton.classList.remove('active');
            controlButton.classList.add('remove')
        }
        if (e.code == 'ArrowUp') {
            arrowUp.classList.remove('active')
            arrowUp.classList.add('remove')
        }
        if (e.code == 'ArrowDown') {
            arrowDown.classList.remove('active')
            arrowDown.classList.add('remove')
        }
        if (e.code == 'ArrowLeft') {
            arrowLeft.classList.remove('active')
            arrowLeft.classList.add('remove')
        }
        if (e.code == 'ArrowRight') {
            arrowRight.classList.remove('active')
            arrowRight.classList.add('remove')
        }
        setTimeout(() => {
            keys[i].classList.remove('remove')
        }, 200)
    }
    console.log(e.code)

})


window.addEventListener('click', (e) => {
    //  console.log(e);
    if (e.target.type === 'button') {
        if (e.target.innerText.toLowerCase() === 'delete') {
            textAreaArray.pop();
            deleteButton.classList.add('active');
            setTimeout(() => {
                deleteButton.classList.remove('active');
            }, 300)

        }
        else if (e.target.innerText.toLowerCase() === 'caps') {

            isCapsLock = !isCapsLock;
            if (language === 'eng') {
                if (isCapsLock) {
                    let arrayUpper = [];
                    keyLayoutEnglish.forEach(element => {
                        arrayUpper.push(element.toUpperCase())
                    });
                    render(arrayUpper);
                    language = 'eng';
                }
                else {
                    render(keyLayoutEnglish)
                }
            }
            else if (language === 'rus') {
                if (isCapsLock) {
                    console.log('rus')
                    let arrayUpper = [];
                    keyLayoutRussian.forEach(element => {
                        arrayUpper.push(element.toUpperCase())
                    });
                    render(arrayUpper);
                    language = 'rus';
                }
                else {
                    render(keyLayoutRussian)
                }
            }
        }
        else if (e.target.innerText.toLowerCase() === 'shift') {

            isShift = !isShift;
            if (language === 'eng') {
                if (isShift) {
                    console.log('eng')
                    let arrayUpper = [];
                    keyLayoutEnglish.forEach(element => {
                        arrayUpper.push(element.toUpperCase())
                    });
                    render(arrayUpper);
                    language = 'eng';
                    isShift = true;
                }
                else {
                    render(keyLayoutEnglish)
                    isShift = false;
                }
            }
            else if (language === 'rus') {
                if (isShift) {
                    console.log('rus')
                    let arrayUpper = [];
                    keyLayoutRussian.forEach(element => {
                        arrayUpper.push(element.toUpperCase())
                    });
                    render(arrayUpper);
                    language = 'rus';
                    isShift = !isShift;
                }
                else {
                    render(keyLayoutRussian)
                    isShift = !isShift;
                }
            }
            shift[0].classList.add('active');

        }
        else if (e.target.innerText.toLowerCase() === 'fn') {
            console.log(language)
            if (language === 'eng') {
                render(keyLayoutRussian);
                language = 'rus'
            }
            else {
                render(keyLayoutEnglish);
            }
        }
        else if (e.target.innerText.toLowerCase() === 'tab') {
            for (let i = 0; i < 4; i++) {
                textAreaArray.push(' ');
            }
        }
        else if (e.target.innerText.toLowerCase() === '') {
            // console.log('space')
            textAreaArray.push(' ');
        }
        else if (e.target.innerText.toLowerCase() === 'enter') {
            textAreaArray.push(`\r\n`);

        }
        else if (e.target.innerText.toLowerCase() === 'cont' || e.target.innerText.toLowerCase() === 'com'|| e.target.innerText.toLowerCase() === 'opt') {
            // console.log('space')
            textAreaArray.push('');
        }
        else {
            textAreaArray.push(e.target.innerText);
        }
        let elements = '';
        textAreaArray.forEach(element => {
            elements += element;
        });
        textArea.textContent = elements;
    }




})



function workCapsLock() {
    isCapsLock = !isCapsLock;
    if (language === 'eng') {
        if (isCapsLock) {
            let arrayUpper = [];
            keyLayoutEnglish.forEach(element => {
                arrayUpper.push(element.toUpperCase())
            });
            render(arrayUpper);
            language = 'eng';

        }
        else {
            render(keyLayoutEnglish)
        }
    }
    else if (language === 'rus') {
        if (isCapsLock) {
            console.log('rus')
            let arrayUpper = [];
            keyLayoutRussian.forEach(element => {
                arrayUpper.push(element.toUpperCase())
            });
            render(arrayUpper);
            language = 'rus';

        }
        else {
            render(keyLayoutRussian)
        }
    }
}

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




// const Keyboard = {
//     elements: {
//         main: null,
//         keysContainer: null,
//         keys: []
//     },

//     eventHandlers: {
//         oninput: null,
//         onclose: null
//     },

//     properties: {
//         value: "",
//         capsLock: false
//     },

//     init() {
//         // Create main elements
//         this.elements.main = document.createElement("div");
//         this.elements.keysContainer = document.createElement("div");
//         // this.elements.textArea = document.createElement('textArea');

//         // Setup main elements
//         this.elements.main.classList.add("keyboard", "keyboard--hidden");
//         this.elements.keysContainer.classList.add("keyboard__keys");
//         this.elements.keysContainer.appendChild(this._createKeys());
//         // this.elements.textArea.classList.add('use-keyboard-input');

//         this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

//         // Add to DOM
//         this.elements.main.appendChild(this.elements.keysContainer);
//         document.body.appendChild(this.elements.main);
//         // this.elements.main.appendChild(this.elements.textArea);

//         // Automatically use keyboard for elements with .use-keyboard-input
//         document.querySelectorAll(".use-keyboard-input").forEach(element => {
//             element.addEventListener("focus", () => {
//                 this.open(element.value, currentValue => {
//                     element.value = currentValue;
//                 });
//             });
//         });
//     },

//     _createKeys() {
//         const fragment = document.createDocumentFragment();
//         const keyLayout = [
//             "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//             "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//             "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//             "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//             "space"
//         ];

//         // Creates HTML for an icon
//         const createIconHTML = (icon_name) => {
//             return `<i class="material-icons">${icon_name}</i>`;
//         };

//         keyLayout.forEach(key => {
//             const keyElement = document.createElement("button");
//             const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

//             // Add attributes/classes
//             keyElement.setAttribute("type", "button");
//             keyElement.classList.add("keyboard__key");

//             switch (key) {
//                 case "backspace":
//                     keyElement.classList.add("keyboard__key--wide");
//                     keyElement.innerHTML = createIconHTML("backspace");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "caps":
//                     keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
//                     keyElement.innerHTML = createIconHTML("keyboard_capslock");

//                     keyElement.addEventListener("click", () => {
//                         this._toggleCapsLock();
//                         keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
//                     });

//                     break;

//                 case "enter":
//                     keyElement.classList.add("keyboard__key--wide");
//                     keyElement.innerHTML = createIconHTML("keyboard_return");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += "\n";
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "space":
//                     keyElement.classList.add("keyboard__key--extra-wide");
//                     keyElement.innerHTML = createIconHTML("space_bar");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += " ";
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "done":
//                     keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
//                     keyElement.innerHTML = createIconHTML("check_circle");

//                     keyElement.addEventListener("click", () => {
//                         this.close();
//                         this._triggerEvent("onclose");
//                     });

//                     break;

//                 default:
//                     keyElement.textContent = key.toLowerCase();

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
//                         this._triggerEvent("oninput");
//                     });

//                     break;
//             }

//             fragment.appendChild(keyElement);

//             if (insertLineBreak) {
//                 fragment.appendChild(document.createElement("br"));
//             }
//         });

//         return fragment;
//     },

//     _triggerEvent(handlerName) {
//         if (typeof this.eventHandlers[handlerName] == "function") {
//             this.eventHandlers[handlerName](this.properties.value);
//         }
//     },

//     _toggleCapsLock() {
//         this.properties.capsLock = !this.properties.capsLock;

//         for (const key of this.elements.keys) {
//             if (key.childElementCount === 0) {
//                 key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
//             }
//         }
//     },

//     open(initialValue, oninput, onclose) {
//         this.properties.value = initialValue || "";
//         this.eventHandlers.oninput = oninput;
//         this.eventHandlers.onclose = onclose;
//         this.elements.main.classList.remove("keyboard--hidden");
//     },

//     close() {
//         this.properties.value = "";
//         this.eventHandlers.oninput = oninput;
//         this.eventHandlers.onclose = onclose;
//         this.elements.main.classList.add("keyboard--hidden");
//     }
// };

// window.addEventListener("DOMContentLoaded", function () {
//     Keyboard.init();
// });

