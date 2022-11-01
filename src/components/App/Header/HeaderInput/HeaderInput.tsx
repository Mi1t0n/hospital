import Form from "components/shared/Forms/Form/Form";
import Input from "components/shared/Forms/Input/Input";
import loupe from "assets/loupe.svg";
import style from "./HeaderInput.module.scss";


const HeaderInput = () =>
    <Form myClassName={style.headerInput}>
        <button>
            <img src={loupe} alt="search button"/>
        </button>
        <Input name={'search'} type={'text'}  placeholder={'Search . . .'}
               options={{required: true}} withLabel={false}/>
    </Form>


export default HeaderInput;
