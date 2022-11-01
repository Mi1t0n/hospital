import React, {FC} from "react";
import {ISelect} from "interfaces/IComponents/ISelect";
import capitalLetter from "utils/capitalLetter";

const Select: FC<ISelect> = ({register, withLabel = true, errors, options = [], name, myClassName, ...rest}) =>
    <div className={myClassName}>
        {withLabel && <label>
            {
                errors[name] ? <span>{capitalLetter(name)} is required</span> : capitalLetter(name)
            }
        </label>}
        <select {...register(name,{required: true})} {...rest}>
            {
                options.map(({value, text}) =>
                    <option value={value} key={value}>
                        {text}
                    </option>
                )
            }
        </select>
    </div>


export default Select