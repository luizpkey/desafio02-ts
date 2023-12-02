interface IUser {
    email: string,
    password: string
}
export const login = ({ email, password }: IUser): void => {
    if (email === 'email' && password === 'password'){
        alert('Bem vinda!');
    }else{
        alert('Email ou senha inválidos!');
    }
}
