interface IDioBank {
    login: boolean; 
}

interface IUserData {
    email: string;
    password: string;
}

const dioBank = {
    login: false,
}

const userData = {
    email: "",
    password: ""
}

export const getLocalStorage = (): string | null => {
    return localStorage.getItem("diobank");
}

export const getLoginLocalStorage = (): string | null => {
    return localStorage.getItem("userdata");
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const createLoginLocalStorage = (): void => {
    localStorage.setItem('userdata', JSON.stringify(userData))
}

export const changeLoginLocalStorage = (userData: IUserData): void => {
    localStorage.setItem('userdata', JSON.stringify(userData))
}