import style from './CollapseButtons.module.scss';
import arrow from "assets/arrow.svg";
import Links from "./Links/Links";
import {FC, useState} from "react";
import {ICollapseButtons} from "interfaces/IComponents/ISideBar";



const CollapseButtons: FC<ICollapseButtons> = ({data}) => {
    const [openButton, setOpenButton] = useState<string>('')

    const toggleHandler = (id: string) =>
        () => {
            if (openButton === id) return setOpenButton('');
            setOpenButton(id);
        }


    const buttons = data.map(({title, logo, subBlocks, id}) =>
        (
            <li key={id} className={openButton === id ? style.isOpen : ''}>
                <button className={style.button}
                        onClick={toggleHandler(id)}
                >
                    <img src={logo} alt={'icon'}/>
                    <div>{title}</div>
                    <img src={arrow} alt={'arrow'}/>
                </button>
                <Links data={subBlocks}/>
            </li>
        )
    )

    return (
        <ul className={style.buttons}>
            {buttons}
        </ul>
    );
}

export default CollapseButtons;
