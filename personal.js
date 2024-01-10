let input = document.querySelector('#input');
let btn = document.querySelector('#button');
input.addEventListener('keyup', () => {
    let name = input.value;
    btn.innerText = name;
})

let form = document.querySelector('form');
form.addEventListener('keyup', () => {
    let name = input.value;
    if (name === 'fuck' || name === "pornhub"){
        form.setAttribute('action', 'https://www.pornhub.com/')
    }
    else{
        form.setAttribute('action', 'https://www.google.com.au/')
    }
    
})