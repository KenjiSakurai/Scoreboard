

let count1 = 0;
let count2 = 0;

let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');

function p1plus1() {
    count1 += 1;
    team1.textContent = count1;
}

function p1plus2() {
    count1 += 2;
    team1.textContent = count1;
}

function p1plus3() {
    count1 += 3;
    team1.textContent = count1;
}


function p2plus1() {
    count2 += 1;
    team2.textContent = count2;
}

function p2plus2() {
    count2 += 2;
    team2.textContent = count2;
}

function p2plus3() {
    count2 += 3;
    team2.textContent = count2;
}


function reset(){
    count1 = 0; 
    count2 = 0;
    
    team1.textContent = count1;
    team2.textContent = count2;
}