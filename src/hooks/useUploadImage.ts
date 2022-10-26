import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {faker} from "@faker-js/faker";
import {useGetCurrentUserQuery, useSetFieldValueMutation} from "../redux/hospitalApi";
import {useAppSelector} from "./reduxHooks";
import {IProfile} from "../interfaces/IComponents/IProfile";
import notification from "../utils/notification";

const useUploadImage = () => {
    const [setField] = useSetFieldValueMutation()
    const serialNumber = useAppSelector(state => state.user.serialNumber)
    const {data} = useGetCurrentUserQuery(serialNumber)

    const uploadHandler = async (file: File) => {
        if (!data) return notification.error('Not Auth')
        const userData = data[0]
        notification.loading('Loading image on server . . . ')
        const storage = getStorage();
        const storageRef = ref(storage, faker.random.numeric(10));
        const {task} = await uploadBytesResumable(storageRef, file)
        task.on('state_changed',
            () => {},
            () => {},
            async () => {
                try {
                    notification.loading('Getting image URL . . . ')
                    const downloadURL = await getDownloadURL(task.snapshot.ref)
                    const seatingData = {
                        ...userData,
                        userProfile: {
                            ...userData.userProfile,
                            avatar: downloadURL
                        }
                    } as IProfile

                    notification.loading('Putting image in your Profile. . . ')
                    await setField({id: userData.id, body: seatingData})
                    notification.success('Enjoy :)')
                } catch (_error) {
                    const error = _error as string
                    notification.error(error)
                }

            }
        )
    }

    return {uploadHandler}
}
export default useUploadImage