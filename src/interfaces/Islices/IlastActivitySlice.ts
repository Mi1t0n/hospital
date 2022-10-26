interface ILastActivityBlock {
    logo: string
    count: number
    title: string
}

interface IlastActivitySlice {
    blocksValue: ILastActivityBlock[] | null
}

export type {IlastActivitySlice, ILastActivityBlock}

