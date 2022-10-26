type IMoneyСhart = {
    month: string
    inTotal: number
}
type  IMoneyRow = {
    title: string
    count: number
}

interface IhospitalSurveySlice {
    moneyLine: IMoneyRow[]|null
    coloredGraph: IMoneyСhart[]|null
}

export type {IhospitalSurveySlice, IMoneyСhart, IMoneyRow}