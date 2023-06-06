let username = document.querySelector('#username');
let password = document.querySelector('#psw');
let button = document.querySelector('button');
let close = document.querySelector('.x-circle');
let dialog = document.querySelector('dialog');
let popupbg = document.querySelector('.popupbg')

let closeDialog = () => {
    dialog.removeAttribute('open');
    popupbg.classList.add('d-none');
}

button.addEventListener('click', () => {
    
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/;
    
    password.classList.remove('is-invalid');

    if(!regex.test(password.value)) {
        password.classList.add('is-invalid');
    } else {
        if(password.value != 'test1234!') {
            dialog.setAttribute('open', '');
            popupbg.classList.remove('d-none')
            setTimeout(() => {
                closeDialog();
            }, 3500);
        } else {
            if(username.value == 'test@luxpmsoft.com') {
                window.location.href = "./blank.html";

            } 
        }
    }
    
})

close.addEventListener('click', () => {
    closeDialog();
})