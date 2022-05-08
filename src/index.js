//import { Key } from '../src/modules/keys.js'
import { Key } from './modules/key.js'

const input = document.querySelector('#input');
const board = document.createElement('div');
const body = document.querySelector('body');
board.classList.add('board');
board.innerHTML = `<div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div>`;
body.append(board);
const rows = document.querySelectorAll('.row');
const keys = {
    //row №1
    Backquote: new Key('key', '0', 0, '~'),
    Digit1: new Key('key', '0', 1, '1' ),
    Digit2: new Key('key', '0', 2, '2' ),
    Digit3: new Key('key', '0', 3, '3'),
    Digit4: new Key('key', '0', 4, '4'),
    Digit5: new Key('key', '0', 5, '5'),
    Digit6: new Key('key', '0', 6, '6'),
    Digit7: new Key('key', '0', 7, '7'),
    Digit8: new Key('key', '0', 8, '8'),
    Digit9: new Key('key', '0', 9, '9'),
    Digit0: new Key('key', '0', 10, '0'),
    Minus: new Key('key', '0', 11, '-'),
    Equal: new Key('key', '0', 12, '='),
    Backspace: new Key('key special', '0', 13,'backspace'),
    //row №2
    Tab: new Key('key special part', '1', '0', 'tab'),
    KeyQ: new Key('key', '1', '1', 'q'),
    KeyW: new Key('key', '1', '2', 'w'),
    KeyE: new Key('key', '1', '3', 'e'),
    KeyR: new Key('key', '1', '4', 'r'),
    KeyT: new Key('key', '1', '5', 't'),
    KeyY: new Key('key', '1', '6', 'y'),
    KeyU: new Key('key', '1', '7', 'u'),
    KeyI: new Key('key', '1', '8', 'i'),
    KeyO: new Key('key', '1', '9', 'o'),
    KeyP: new Key('key', '1', '10', 'p'),
    BracketLeft: new Key('key', '1', '11', '['),
    BracketRight: new Key('key', '1', '12', ']'),
    Backslash: new Key('key', '1', '13', "\\"),
    Delete: new Key('key special part delete', '1', '14', 'del'),
    //row №3
    CapsLock: new Key('key special caps', 2, 0, 'caps lock'),
    KeyA: new Key('key', 2, 1, 'a'), 
    KeyS: new Key('key', 2, 2, 's'),
    KeyD: new Key('key', 2, 3, 'd'),
    KeyF: new Key('key', 2, 4, 'f'),
    KeyG: new Key('key', 2, 5, 'g'),
    KeyH: new Key('key', 2, 6, 'h'),
    KeyJ: new Key('key', 2, 7, 'j'),
    KeyK: new Key('key', 2, 8, 'k'),
    KeyL: new Key('key', 2, 9, 'l'), 
    Semicolon: new Key('key', 2, 10, ';'),
    Quote: new Key('key', 2, 11, `'`),
    Enter: new Key('key special enter', 2, 12, `Enter`),
    //row №4
    ShiftLeft: new Key('key special shift-left', 3, 0, 'Shift'),
    KeyZ: new Key('key', 3, 1, 'z'),
    KeyX: new Key('key', 3, 2, 'x'),
    KeyC: new Key('key', 3, 3, 'c'),
    KeyV: new Key('key', 3, 4, 'v'),
    KeyB: new Key('key', 3, 5, 'b'),
    KeyN: new Key('key', 3, 6, 'n'),
    KeyM: new Key('key', 3, 7, 'm'),
    Comma: new Key('key', 3, 8, ','),
    Period: new Key('key', 3, 9, '.'),
    Slash: new Key('key', 3, 10, '/'),
    ArrowUp: new Key('key', 3, 11, '▲'),
    ShiftRight: new Key('key special shift-right', 3, 12, 'Shift'),

}

Object.keys(keys).forEach(index => {
    const keyCreated = document.createElement('div');
    keyCreated.className = keys[index].classKey;
    keyCreated.innerHTML += keys[index].item;
    board.append(keyCreated);
    rows[keys[index].row].append(keyCreated);
});



document.addEventListener('keydown', (e) => {
    console.log(e.code);
    console.log( keys[e.code].keyNumber );

    const row = document.querySelectorAll('.row')[keys[e.code].row];
    const key = row.querySelectorAll('.key')[keys[e.code].keyNumber];
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
        return;
    }
    input.innerHTML += keys[e.code].item;
});

document.addEventListener('keyup', (e) => {
    const row = document.querySelectorAll('.row')[keys[e.code].row];
    const key = row.querySelectorAll('.key')[keys[e.code].keyNumber];
    key.classList.remove('pressed');
});
