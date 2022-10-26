interface month {
    last: number,
    curr: number
}

interface data {
    name: string,
    inTotal: number
}

interface ITotalReportGraphic {
    title: string
    color: string
    month: month
    data: data[]
}

interface ItotalReportSlice {
    death: ITotalReportGraphic|null
    recover: ITotalReportGraphic|null
}

export type {ITotalReportGraphic, month,ItotalReportSlice, data}
