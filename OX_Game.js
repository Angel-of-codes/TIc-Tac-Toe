// import { sum } from "lodash";
var turn = 0;
var chance = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0];

var win = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0];

let move = 0
var aiChance = 0;

if (move == 0) {
    // start();
}

function Tap(btn) {

    let cur = document.getElementById(btn.id);
    let ch = parseInt(btn.id);
    ch -= 1;

    if (chance[ch] === 0) {
        move++;
        chance[ch] = 1;
        if (turn == 0) {
            cur.innerHTML = "<i class='bx bx-radio-circle ox'></i>";
            turn = 1;
            win[ch] = 5
            // aiChance = 1;


        }

        else {
            cur.innerHTML = "<i class='bx bx-x ox'></i>";
            turn = 0;
            win[ch] = 1;
            if (aiChance == 1) {
                // ai(ch);
            }
        }

        if (move >= 5) {
            wins();
        }
    }
    else {
        var g = chance.reduce(function (x, y) {
            return x + y;
        }, 0);
        if (g === 9) {
            wins();
        }
        else {
            alert("Choose Another field !!")
        }


    }
}


function wins() {
    if (
        (win[0] + win[1] + win[2] === 15) ||
        (win[3] + win[4] + win[5] === 15) ||
        (win[6] + win[7] + win[8] === 15) ||
        (win[0] + win[3] + win[6] === 15) ||
        (win[1] + win[4] + win[7] === 15) ||
        (win[2] + win[5] + win[8] === 15) ||
        (win[0] + win[4] + win[8] === 15) ||
        (win[2] + win[4] + win[6] === 15)
    ) {
        alert("O wins the Game");
        location.reload();
    }
    else if (
        (win[0] + win[1] + win[2] === 3) ||
        (win[3] + win[4] + win[5] === 3) ||
        (win[6] + win[7] + win[8] === 3) ||
        (win[0] + win[3] + win[6] === 3) ||
        (win[1] + win[4] + win[7] === 3) ||
        (win[2] + win[5] + win[8] === 3) ||
        (win[0] + win[4] + win[8] === 3) ||
        (win[2] + win[4] + win[6] === 3)
    ) {
        alert("X wins the Game");
        location.reload();
    }

    else {
        var f = win.reduce(function (x, y) {
            return x + y;
        }, 0);
        if (f >= 25) {
            alert("Game Draw");
            location.reload();
        }
    }
}

function start() {
    let s = document.getElementById(1);
    s.click();
}

// posibility 
var p = 0;


function ai(ch) {
    // check the current click
    c = ch;
    aiChance = 0

    // check remains click 
    for (let i = 0; i < chance.length; i++) {
        let remains = [];
        if (chance[i] == 0) {
            remains.push(i);
        }

    }


    // the best click 
    if (move == 2) {
        if (c == 8) {
            p = 21;
            let s = document.getElementById(5);
            s.click();
        }
        else if (c != 4) {
            p = 2;
            let s = document.getElementById(5);
            s.click();
        }

        else {
            p = 11;
            let s = document.getElementById(9);
            s.click();
        }
    }

    else if (move == 4) {
        if ((c != 8) && (p == 11)) {
            p11(c);
        }
        else if ((c != 8) && (p == 2)) {
            let s = document.getElementById(9);
            s.click();
        }

        else if ((c == 2 || c == 6) && (p == 21)) {
            p = 212
            if (c == 2) {
                let s = document.getElementById(6);
                s.click();
            }
            else {
                let s = document.getElementById(8);
                s.click();

            }
        }
        else if ((c == 5 || c == 7) && (p == 21)) {
            p = 212
            if (c == 5) {
                let s = document.getElementById(3);
                s.click();
            }
            else {
                let s = document.getElementById(7);
                s.click();
            }
        }
        else if ((c == 1 || c == 3) && (p == 21)) {
            p = 212
            let s = document.getElementById(7);
            s.click();
        }
        else {
            p = 212
            let s = document.getElementById(7);
            s.click();
        }
    }

    else if (move == 6) {
        if (c == 6 && p == 11) {
            p11(c);
        }
        else if (c == 3 && p == 11) {
            let s = document.getElementById(3);
            s.click();
        }
        else if ((c == 3 || c == 7) && p == 2) {
            p = 21
            let s = document.getElementById(3);
            s.click();
        }
        else if (c == 2 && p == 2) {
            let s = document.getElementById(4);
            s.click();
        }
        else if (c == 2 && p == 21) {
            let s = document.getElementById(6);
            s.click();
        }

        // posibility 212
        else if ((c == 2 || c == 3) && p == 212) {
            if (c == 2) {
                let s = document.getElementById(4);
                s.click();
            }
            else{
                let s = document.getElementById(3);
            s.click();
            }

        }
        // else if (c == 4 && p ==2 ) {
        //     let s = document.getElementById(4);
        //     s.click();
        // }
        else {
            let s = document.getElementById(7);
            s.click();
        }

    }

    else if (move == 8) {
        p11(c);
    }

}

function p11(c) {
    let s = document.getElementById(9 - c);
    s.click();
}