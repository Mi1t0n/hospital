import style from './ChangePhotoButton.module.scss';
import {ChangeEvent, useRef} from "react";
import useUploadImage from "hooks/useUploadImage";


const ChangePhotoButton = () => {
    const inputFile = useRef<null | HTMLInputElement>(null)
    const {uploadHandler} = useUploadImage()

    const fileHandler = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        await uploadHandler(event.target.files[0])
    }

    const openInput = () => inputFile.current?.click()

    return (
        <>
            <label htmlFor="fileInput" className={style.button} onClick={openInput}>
                Change Photo
            </label>
            <input ref={inputFile} type="file" onChange={fileHandler}
                   name='fileInput' placeholder={'Change Photo'}
                   multiple={false} accept={'.png,.jpg'} className={style.input}/>
        </>
    );
}

export default ChangePhotoButton;
