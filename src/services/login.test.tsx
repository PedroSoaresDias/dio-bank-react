import { login } from "./login";

describe('login', () => {
    const mockEmail = "pedro@email.com";
    const mockPassword = "1234abc";

    it("Deve realizar um login caso o email e senha sejam válidos", async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it("Deve exibir um erro caso o email e senha sejam inválidos", async () => {
        const response = await login("email@invalido.com", "outraSenha");
        expect(response).toBeFalsy()
    })

    it("Deve exibir um erro caso o email seja inválido", async () => {
        const response = await login("email@invalido.com", mockPassword);
        expect(response).toBeFalsy()
    })

    it("Deve exibir um erro caso a senha seja inválida", async () => {
        const response = await login(mockEmail, "outraSenha");
        expect(response).toBeFalsy()
    })
})