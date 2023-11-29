const inputEmail = document.querySelector('.input');
const buttonEmail = document.querySelector('.btn');
const mainBlock = document.querySelector('.main-block');
const textEmail = document.querySelector('.text');
const successBlock = document.querySelector('.success-block');
const textUpdate = document.querySelector('.success-subtitle');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function inputsVarible(value){
    if(!emailRegex.test(value)){
        inputEmail.classList.add('red');
         closeEmailValid()
    }
    else{
       mainBlock.classList.add('hide');
       successBlock.classList.remove('hide');
       UpdateText()
    }
}


function closeEmailValid(){
        textEmail.classList.remove('hide');
        textEmail.classList.add('active');
}

function UpdateText(){
    const value = inputEmail.value;
    textUpdate.innerHTML = `A confirmation email has been sent to ${value}.
    Please open it and click the button inside to confirm you subscription`
    textUpdate.style.marginBottom = '20px';
}

buttonEmail.addEventListener('click',()=>{
    const value = inputEmail.value;
    inputsVarible(value);
})

