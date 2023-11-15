document.getElementById('img').src='bulb.png';
document.getElementById('text').innerHTML='OFF';
document.getElementById('off').style.backgroundColor='green';

function btnOn(){
    document.getElementById('img').src='on.png';
    document.getElementById('text').innerHTML='ON';
    document.getElementById('on').style.background='yellow';
    document.getElementById('off').style.backgroundColor='white'
}
function btnOff(){
    document.getElementById('img').src='bulb.png';
    document.getElementById('text').innerHTML='OFF';
    document.getElementById('off').style.backgroundColor='green'
    document.getElementById('on').style.backgroundColor='white'
}