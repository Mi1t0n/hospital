import style from './TitleBlocks.module.scss';
import CollapseButtons from "./CollapseButtons/CollapseButtons";
import {FC} from "react";
import {ITitleBlocks} from "interfaces/IComponents/ISideBar";

const TitleBlocks: FC<ITitleBlocks> = ({data}) => {
    const blocks = data.map(({title, subBlocks}, index) =>
        (<li key={index}>
            <div className={style.title}>{title}</div>
            <CollapseButtons data={subBlocks}/>
        </li>)
    )

    return (
        <ul className={style.blocks}>
            {blocks}
        </ul>
    );
}

export default TitleBlocks
