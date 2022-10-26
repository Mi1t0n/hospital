import delay from "utils/delay";
import {faker} from "@faker-js/faker";

const recentNotificationsMockData = () => {
    const fakeResponse: any[] = []

    for (let i = 0; i < 5; i++) {
        const notification = {
            postDate: new Date(faker.date.past().getTime()).toLocaleDateString(),
            content : faker.lorem.lines(1)
        }
        fakeResponse.unshift(notification)
    }
    const res = fakeResponse.sort((a, b) => a.postDate - b.postDate)
    return delay(4000,{notifications:res} )
}
export default recentNotificationsMockData