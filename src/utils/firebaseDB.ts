import {child, get, getDatabase, ref, set} from "firebase/database";

const readData = async (path: string) => {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, path))
    return data.val()
}
const writeData = (path: string, recordData: object) => {

    set(ref(getDatabase(), path), recordData);
}
export {readData, writeData}