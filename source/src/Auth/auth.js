const cadastro = (email, senha) => {
    localStorage.setItem('logado', false)
    if(senha.trim().length < 3 || email.trim().length < 5) {
        console.error('senha ou email muito curtos.')
        return
    }
    const valores = [email.trim(), senha.trim()]
    localStorage.setItem('auth', JSON.stringify(valores));
}

const login = (email, senha) => {
    if(!JSON.parse(localStorage.getItem('auth'))) return;

    const auth = JSON.parse(localStorage.getItem('auth'));
    if(email === auth[0] & senha === auth[1]){
        localStorage.setItem('logado', true)
        return true
    }else{
        console.error('As senhas e/ou email não conhecidem com as informações cadastradas.')
        return false
    }
}

const logOut = () => {
    localStorage.removeItem('logado');
    localStorage.removeItem('auth');
}

export {login, cadastro, logOut}