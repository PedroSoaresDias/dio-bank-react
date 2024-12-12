const conta = {
    id: "1",
    email: "pedro@email.com",
    password: "1234abc",
    name: "Pedro Dias",
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})