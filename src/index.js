class Key {
    constructor(classKey, row, keyNumber, caseDown, caseUp, caps, shiftCaps) {
      this.classKey = classKey;
      this.row = row;
      this.keyNumber = keyNumber;
      this.caseDown = caseDown;  
      this.caseUp = caseUp;
      this.caps = caps;
      this.shiftCaps = shiftCaps;
    }
  }

  const keys = {
    //row №1
    Backquote: new Key('key', '0', 0, "`", '~', "`", '~'),
    Digit1: new Key('key', '0', 1, '1', '!', '1', '!'),
    Digit2: new Key('key', '0', 2, '2', '@', '2', '@'),
    Digit3: new Key('key', '0', 3, '3', '#', '3', '#'),
    Digit4: new Key('key', '0', 4, '4', '$', '4', '$'),
    Digit5: new Key('key', '0', 5, '5', '%', '5', '%'),
    Digit6: new Key('key', '0', 6, '6', '^', '6', '^'),
    Digit7: new Key('key', '0', 7, '7', '&', 7, '7', '&'),
    Digit8: new Key('key', '0', 8, '8', '*', '8', '*'),
    Digit9: new Key('key', '0', 9, '9', '(', '9', '('),
    Digit0: new Key('key', '0', 10, '0', ')', '0', ')'),
    Minus: new Key('key', '0', 11, '-', '_', '-', '_'),
    Equal: new Key('key', '0', 12, '=', '+', '=', '+'),
    Backspace: new Key('key special', '0', 13, 'backspace', 'backspace', 'backspace', 'backspace'),
    //row №2
    Tab: new Key('key special part', '1', '0', 'tab', 'tab', 'tab', 'tab'),
    KeyQ: new Key('key', '1', 1, 'q', 'Q', 'Q', 'q'),
    KeyW: new Key('key', '1', 2, 'w', 'W', 'W', 'w'),
    KeyE: new Key('key', '1', 3, 'e', 'E', 'E', 'e'),
    KeyR: new Key('key', '1', 4, 'r', 'R', 'R', 'r'),
    KeyT: new Key('key', '1', 5, 't', 'T', 'T', 't'),
    KeyY: new Key('key', '1', 6, 'y', 'Y', 'Y', 'y'),
    KeyU: new Key('key', '1', 7, 'u', 'U', 'U', 'u'),
    KeyI: new Key('key', '1', 8, 'i', 'I', 'I', 'i'),
    KeyO: new Key('key', '1', 9, 'o', 'O', 'O', 'o'),
    KeyP: new Key('key', '1', 10, 'p', 'P', 'P', 'p'),
    BracketLeft: new Key('key', '1', '11', '[', '{', '[', '{'),
    BracketRight: new Key('key', '1', '12', ']', '}', ']', '}'),
    Backslash: new Key('key', '1', '13', "\\", '|', "\\", '|'),
    Delete: new Key('key special part delete', '1', '14', 'Del', 'Del', 'Del', 'Del'),
    //row №3
    CapsLock: new Key('key special capslock', 2, 0, 'Caps lock', 'Caps lock', 'Caps lock', 'Caps lock'),
    KeyA: new Key('key', 2, 1, 'a', 'A', 'A', 'a'), 
    KeyS: new Key('key', 2, 2, 's', 'S', 'S', 's'),
    KeyD: new Key('key', 2, 3, 'd', 'D', 'D', 'd'),
    KeyF: new Key('key', 2, 4, 'f', 'F', 'F', 'f'),
    KeyG: new Key('key', 2, 5, 'g', 'G', 'G', 'g'),
    KeyH: new Key('key', 2, 6, 'h', 'H', 'H', 'h'),
    KeyJ: new Key('key', 2, 7, 'j', 'J', 'J', 'j'),
    KeyK: new Key('key', 2, 8, 'k', 'K', 'K', 'k'),
    KeyL: new Key('key', 2, 9, 'l', 'L', 'L', 'l'), 
    Semicolon: new Key('key', 2, 10, ';', ':', ';', ':'),
    Quote: new Key('key', 2, 11, `'`, `"`, `'`, `"`),
    Enter: new Key('key special enter', 2, 12, `Enter`, 'Enter', `Enter`, 'Enter'),
    //row №4
    ShiftLeft: new Key('key special shift-left', 3, 0, 'Shift', 'Shift', 'Shift', 'Shift'),
    KeyZ: new Key('key', 3, 1, 'z', 'Z', 'Z', 'z'),
    KeyX: new Key('key', 3, 2, 'x', 'X', 'X', 'x'),
    KeyC: new Key('key', 3, 3, 'c', 'C', 'C', 'c'),
    KeyV: new Key('key', 3, 4, 'v', 'V', 'V', 'v'),
    KeyB: new Key('key', 3, 5, 'b', 'B', 'B', 'b'),
    KeyN: new Key('key', 3, 6, 'n', 'N', 'N', 'n'),
    KeyM: new Key('key', 3, 7, 'm', 'M', 'M', 'm'),
    Comma: new Key('key', 3, 8, ',', '<', ',', '<'),
    Period: new Key('key', 3, 9, '.', '>', '.', '>'),
    Slash: new Key('key', 3, 10, '/', '?', '/', '?'),
    ArrowUp: new Key('key', 3, 11, '▲', '▲', '▲', '▲'),
    ShiftRight: new Key('key special shift-right', 3, 12, 'Shift', 'Shift', 'Shift', 'Shift'),
    ControlLeft: new Key('key special part', 4, 0, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl' ),
    MetaLeft: new Key('key special part', 4, 1, 'Win', 'Win', 'Win', 'Win' ),
    AltLeft: new Key('key special part', 4, 2, 'Alt', 'Alt', 'Alt', 'Alt' ),
    Space: new Key('key space', 4, 3, '', '', '', '' ),
    AltRight: new Key('key special part', 4, 4, 'Alt', 'Alt', 'Alt', 'Alt' ),
    ArrowLeft: new Key('key', 4, 5,  '◀', '◀', '◀', '◀'),
    ArrowDown: new Key('key', 4, 6, '▼', '▼', '▼', '▼'),
    ArrowRight: new Key('key', 4, 7, '▶', '▶', '▶', '▶'),
    ControlRight: new Key('key special part', 4, 8, 'ctrl', 'ctrl', 'ctrl', 'ctrl'),
    }


const input = document.querySelector('#input');
const board = document.createElement('div');
const body = document.querySelector('body');
let flagCapsLock = false;
board.classList.add('board');
board.innerHTML = `<div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div><div class="row">`;
body.append(board);
const rows = document.querySelectorAll('.row');


Object.keys(keys).forEach(index => {
    const keyCreated = document.createElement('div');

    const caseDown = document.createElement('span');
    caseDown.classList.add('caseDown');
    caseDown.innerHTML += keys[index].caseDown;

    const caseUp = document.createElement('span');
    caseUp.classList.add('caseUp');
    caseUp.classList.add('hidden');
    caseUp.innerHTML += keys[index].caseUp;

    const caps = document.createElement('span');
    caps.classList.add('caps');
    caps.classList.add('hidden');
    caps.innerHTML += keys[index].caps;

    const shiftCaps = document.createElement('span');
    shiftCaps.classList.add('shiftCaps');
    shiftCaps.classList.add('hidden');
    shiftCaps.innerHTML += keys[index].shiftCaps;

    keyCreated.className = keys[index].classKey;
    keyCreated.append(caseDown);
    keyCreated.append(caseUp);
    keyCreated.append(caps);
    keyCreated.append(shiftCaps);
    board.append(keyCreated);
    rows[keys[index].row].append(keyCreated);
});

const findNotHiddenClass = (key) => {
    let notHiddenClassName = "";
    for (let i = 0; i < key.children.length; i++) {
        if(!key.children[i].className.match(/hidden/)) {
            notHiddenClassName = key.children[i].className;
            //console.log(notHiddenClassName);
            return notHiddenClassName;
        }   
    }
}

document.addEventListener('keydown', (e) => {
    console.log(e.code);
    let notHiddenClassName;

    const row = document.querySelectorAll('.row')[keys[e.code].row];
    const key = row.querySelectorAll('.key')[keys[e.code].keyNumber];
    notHiddenClassName = findNotHiddenClass(key);
    if(e.code === 'CapsLock') {
        key.classList.toggle('pressed');
        (flagCapsLock == true) ? (flagCapsLock = false) : (flagCapsLock = true)
        const caseDowns = document.querySelectorAll('.caseDown');
        const caps = document.querySelectorAll('.caps');
        caseDowns.forEach(e => {
            e.classList.toggle('hidden');
        });
        caps.forEach(e => {
            e.classList.toggle('hidden');
        });
        return;
    }
    key.classList.add('pressed');
    if(e.code === 'Backspace' ) {
        input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
        return;
    }
    if(e.code === 'Delete') {
        return;
    }
    if(e.code === 'Tab') {
        e.preventDefault();
        input.innerHTML += "    ";
        return;
    }
    if(e.code === 'Enter') {
        e.preventDefault();
        return;
    }
    

    if((e.code === 'ShiftLeft') ||  (e.code === 'ShiftRight')) {
        e.preventDefault();
        const caseDowns = document.querySelectorAll('.caseDown');
        const caseUps = document.querySelectorAll('.caseUp');
        const caps = document.querySelectorAll('.caps');
        const shiftCaps = document.querySelectorAll('.shiftCaps')
        if(flagCapsLock) {
            caps.forEach(e => {
                e.classList.add('hidden');
            });
            shiftCaps.forEach(e => {
                e.classList.remove('hidden');
            });
            return;
        }
        caseDowns.forEach(e => {
            e.classList.add('hidden');
        });
        caseUps.forEach(e => {
            e.classList.remove('hidden');
        });
        return;
    }

    //console.log(notHiddenClassName);
    input.innerHTML += keys[e.code][notHiddenClassName];
});

document.addEventListener('keyup', (e) => {
    const row = document.querySelectorAll('.row')[keys[e.code].row];
    const key = row.querySelectorAll('.key')[keys[e.code].keyNumber];
    if(e.code === 'CapsLock') {
        return;
    }
    key.classList.remove('pressed');
    
    if((e.code === 'ShiftLeft') ||  (e.code === 'ShiftRight')) {
        const caseDowns = document.querySelectorAll('.caseDown');
        const caseUps = document.querySelectorAll('.caseUp');
        const caps = document.querySelectorAll('.caps');
        const shiftCaps = document.querySelectorAll('.shiftCaps')

        if(flagCapsLock) {
            caps.forEach(e => {
                e.classList.remove('hidden');
            });
            shiftCaps.forEach(e => {
                e.classList.add('hidden');
            });
            return;
        }

        caseDowns.forEach(e => {
            e.classList.remove('hidden');
        });
        caseUps.forEach(e => {
            e.classList.add('hidden');
        });
        return;
    }
});
