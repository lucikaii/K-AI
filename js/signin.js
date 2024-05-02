'use strict'

const signinButton = document.getElementById('signin')
const getUsers = async function(){

    const url = 'https://back-login.vercel.app/usuarios'

    try {

        const response = await fetch(url)
        const users = await response.json()
        return users
        
    } catch (error) {
        alert('Ocorreu um erro ao entrar')
        return false
    }
}

const validateSignin = async function(){

    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('password').value

    let userStatus = false

    const users = await getUsers()
    console.log(users)


    users.forEach(user => {

        if(emailInput == '' || passwordInput == ''){
            alert('Preencha todos os campos')
            return null
        }

        if(emailInput == user.email && passwordInput == user.senha){

            userStatus = true

            window.location.href = './pages/home.html'
        }

        if(!userStatus){
            alert('Credenciais inválidas')
        }
        
    })
}

signinButton.addEventListener('click', validateSignin)