import React, {FC} from "react";
import {IInput} from "interfaces/IComponents/IInput";
import capitalLetter from "utils/capitalLetter";

const Input: FC<IInput> = ({withLabel = true, register, name, options, errors,myClassName, ...rest}) =>
    <div className={myClassName}>
        {withLabel && <label>
            {
                errors[name] ? <span>{capitalLetter(name)} is required</span> : capitalLetter(name)
            }
        </label>}
        <input {...register(name, options)}{...rest}/>
    </div>


export default Input;