import {
    changeLocalStorage,
    changeLoginLocalStorage,
    createLocalStorage,
    createLoginLocalStorage,
    getLocalStorage,
    getLoginLocalStorage
} from "./storage"

const dioBank = {
    login: false,
}

const userData = {
    email: "",
    password: ""
}

describe("storage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

    it('Deve retornar um objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve retornar um objeto no localStorage com a chave userdata', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getLoginLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('userdata')
    })

    it('Deve criar um objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve criar um LocalStorage do objeto usuário', () => {
        createLoginLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('userdata', JSON.stringify(userData));
    })

    it('Deve alterar o valor do objeto no localStorage da chave userdata', () => {
        changeLoginLocalStorage(userData)
        expect(mockSetItem).toHaveBeenCalledWith('userdata', JSON.stringify(userData))
    })
})