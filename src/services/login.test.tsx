import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const user = { email: 'email', password: 'password' };
        login( user )
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })

    it('Não deve conseguir logar email errado', () => {
        const user = { email: 'email_errado', password: 'password' };
        login(user)
        expect(mockAlert).toHaveBeenCalledWith('Email ou senha inválidos!')
    })

    it('Não deve conseguir logar senha errada', () => {
        const user = { email: 'email', password: 'pass' };
        login(user)
        expect(mockAlert).toHaveBeenCalledWith('Email ou senha inválidos!')
    })

})