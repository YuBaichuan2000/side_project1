// alert interaction
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.form1').addEventListener('submit', function(event){
        let name = document.querySelector('.form1 #name').value;
        alert('hello ' + name);
        event.preventDefault();
    })
})
// greeting interaction
document.addEventListener('DOMContentLoaded', function(){
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
});