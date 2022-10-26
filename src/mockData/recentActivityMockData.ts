import delay from "utils/delay";
import {faker} from "@faker-js/faker";

const recentActivityMockData = () => {
    const fakeResponse: any[] = []

    for (let i = 0; i < 4; i++) {
        const data = {
            title: faker.address.country(),
            value: faker.random.numeric(2)
        }
        fakeResponse.push(data)
    }
    return delay(4000, {blocksValue: fakeResponse})
}
export default recentActivityMockData