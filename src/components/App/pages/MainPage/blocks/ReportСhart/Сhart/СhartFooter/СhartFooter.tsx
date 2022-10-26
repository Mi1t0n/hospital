import style from './СhartFooter.module.scss';
import {IGraphicFooter} from "interfaces/IComponents/IСhart";
import {FC} from "react";

const HartFooter: FC<IGraphicFooter> = ({last, curr}) =>
    (<footer className={style.footer}>
        <div>
            <h6>Last Month</h6>
            <p>{last}</p>
        </div>
        <div>
            <h6>Current Month</h6>
            <p>{curr}</p>
        </div>
    </footer>)

export default HartFooter;
