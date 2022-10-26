interface IrecentActivityBlock {
    title: string
    value: number
}

interface IrecentActivitySlice  {
    blocksValue:IrecentActivityBlock[]|null
}
export type {IrecentActivityBlock, IrecentActivitySlice}