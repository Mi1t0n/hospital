import style from './Input.module.scss';
import loupe from 'assets/loupe.svg';
import {ChangeEvent, FC, useState} from 'react';
import {IInput} from "interfaces/IComponents/IInput";

const Input:FC<IInput> = ({valueOnClick}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    return (
        <nav className={style.inputBlock}>
            <button onClick={()=>valueOnClick(inputValue)}>
                <img src={loupe} alt={'loupe'}/>
            </button>
            <input type="text" onChange={changeHandler} value={inputValue} placeholder='Search here...'/>
        </nav>
    );
};


export default Input;
