let button1 = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');
let button3 = document.querySelector('.btn3');
let button4 = document.querySelector('.btn5');
button1.onclick = () => {
    if(document.getElementById('1').checked) {
        console.log("Right answer on question 1");
    }else if(document.getElementById('0').checked) {
        console.log("Not right answer on question 1");
    }}
button2.onclick = () => {
    if(document.getElementById('2').checked) {
        console.log("Right answer on question 2");
    }else if(document.getElementById('3').checked) {
        console.log("Not right answer on question 2");
    }}
button3.onclick = () => {
    if(document.getElementById('4').checked) {
        console.log("Right answer on question 3");
    }else if(document.getElementById('5').checked) {
        console.log("Not right answer on question 3");
    }}
button4.onclick = () => {
    if(document.getElementById('6').checked) {
        console.log("Right answer on question 4");
    }else if(document.getElementById('7').checked) {
        console.log("Not right answer on question 4");
    }}