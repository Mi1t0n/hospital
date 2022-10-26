interface month {
    last: number,
    curr: number
}

interface data {
    name: string,
    inTotal: number
}
type IGraphicFooter = month

interface IСhart {
    title: string
    color: string
    month: month
    data: data[]
}

export type { IСhart, month, data,IGraphicFooter}