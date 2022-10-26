import randomValueBetween from "utils/randomValueBetween";
import delay from "utils/delay";


enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

const hospitalSurveyFetchLink =  () => {
    const nowMonth = new Date().getMonth();
    const fakeResponse: any = {coloredGraph: [], moneyLine: [],}

    for (let i = 0; i <= nowMonth; i++) {
        fakeResponse.coloredGraph.push({month: Month[i], inTotal: randomValueBetween()});
    }
    fakeResponse.moneyLine = [
        {
            title: 'Today\'s Income',
            count: randomValueBetween(300, 1500)},
        {
            title: 'This Week\'s Income',
            count: randomValueBetween(1000, 5000)},
        {
            title: 'This Month\'s Income',
            count: fakeResponse.coloredGraph[nowMonth].inTotal},
        {
            title: 'This Year\'s Income',
            count: fakeResponse.coloredGraph.reduce((accumulator: any, {inTotal}: any) => accumulator + inTotal, 0)
        }
    ];
    return delay(3000, fakeResponse)
}
export default hospitalSurveyFetchLink