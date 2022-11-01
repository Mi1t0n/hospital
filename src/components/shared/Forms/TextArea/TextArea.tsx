import React, {FC} from "react";
import capitalLetter from "utils/capitalLetter";
import {ITextArea} from "interfaces/IComponents/ITextArea";


const TextArea: FC<ITextArea> = ({withLabel = true, register, name, options, errors, myClassName, ...rest}) =>
    <div className={myClassName}>
        {withLabel && <label>
            {
                errors[name] ? <span>{capitalLetter(name)} is required</span> : capitalLetter(name)
            }
        </label>}
        <textarea {...register(name, options)}{...rest}/>
    </div>


export default TextArea;