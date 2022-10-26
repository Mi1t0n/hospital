interface IlogInInputs {
    email: string
    password: string
}

interface IsignUpInputs extends IlogInInputs {
    firstName: string
    lastName: string
}

export type {IlogInInputs, IsignUpInputs}