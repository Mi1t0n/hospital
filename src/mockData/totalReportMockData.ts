import randomValueBetween from "utils/randomValueBetween";
import delay from "utils/delay";



const totalReportMockData =  () => {

    const randomValue = () => randomValueBetween(0, 500)
    const item = (i: number) => {
        const date = () => {
            const pastDay = new Date().setDate(new Date().getDate() - i)
            return new Date(pastDay).toLocaleDateString('en-US', {month: "short", day: "numeric"})
        }
        return {name: date(), inTotal: randomValue()}
    }

    const fakeResponse: any = {
        death  : {
            title: 'Total Death Report',
            color: '#d90808',
            month: {last: randomValue(), curr: randomValue()},
            data : []
        },
        recover: {
            title: 'Total Recover Report',
            color: '#2daab8',
            month: {last: randomValue(), curr: randomValue()},
            data : []
        }
    }

    for (let i = 0; i < 7; i++) {
        fakeResponse.death.data.unshift(item(i))
        fakeResponse.recover.data.unshift(item(i))
    }

    return delay(4000, fakeResponse)
}
export default totalReportMockData