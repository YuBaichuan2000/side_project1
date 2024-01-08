// alert interaction
document.querySelector('.form1').addEventListener('submit', function(event){
    let name = document.querySelector('.form1 #name').value;
    alert('hello ' + name);
    event.preventDefault();
});
// greeting interaction
let input = document.querySelector('.form2 input');
input.addEventListener('keyup', function(event){
    let name = document.querySelector('.form2 p');
    if (input.value){
        name.innerHTML = `hello, ${input.value}`;
    }
    else{
        name.innerHTML = 'hello, whoever you are';
    }
});

let body = document.querySelector('body');
document.querySelector('#red').addEventListener('click', ()=>{
    body.style.backgroundColor = 'red';
});
document.querySelector('#green').addEventListener('click', ()=>{
    body.style.backgroundColor = 'green';
});
document.querySelector('#blue').addEventListener('click', ()=>{
    body.style.backgroundColor = 'blue';
});

function reset(){
    body.style.backgroundColor = 'white';
}

window.setInterval(reset, 2000);