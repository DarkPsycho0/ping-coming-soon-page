const submitBtn = document.querySelector('.submit')
const emailInput = document.querySelector('.email')
const noEmail = document.getElementById('no-email')
const invalidEmail = document.getElementById('invalid-email')
const form = document.querySelector('form')

form.addEventListener('submit', (form) =>{
    form.preventDefault()
})

submitBtn.addEventListener('click', () => {
    if((validateEmail(emailInput.value))) {
        emailInput.classList.remove('email-erro')
        invalidEmail.classList.add('none')
    }else {
        emailInput.classList.add('email-erro')
        invalidEmail.classList.remove('none')
    }
    if (emailInput.value === "") {
        invalidEmail.classList.add('none')
        emailInput.classList.add('email-erro')
        noEmail.classList.remove('none')
    }else {
        emailInput.classList.remove('email-erro')
        noEmail.classList.add('none')
    }
})

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}