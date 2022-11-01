import {faker} from "@faker-js/faker";
import toast from "react-hot-toast";

const notification = {
    toastID: faker.random.numeric(8),
    loading(message: string) {
        toast.loading(message, {id: this.toastID})
    },
    success(message: string) {
        toast.success(message, {id: this.toastID})
    },
    error(error:string|undefined) {
        toast.error(`Something went wrong :[ \n Error: ${error}`, {id: this.toastID})
    }
}
export default notification