import FormType from '../FormType/FormType';
import {IlogInInputs} from "interfaces/IComponents/IAuthenticationInputs";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {logIn} from "redux/slices/authSlice/authSlice";
import Form from "components/shared/Forms/Form/Form";
import Input from "components/shared/Forms/Input/Input";
import Button from "../../../shared/Forms/Button/Button";


const LogIn = () => {
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector(state => state.auth)

    const logInSubmitHandler = ({email, password}: IlogInInputs) =>
        dispatch(logIn({email, password}))

    return (
        <Form onSubmit={logInSubmitHandler}>
            <FormType isLoading={loading}/>
            <Input name={'email'} type={'email'}
                   disabled={loading} options={{required: true, minLength: 6}}
            />
            <Input name={'password'} type={'password'}
                   disabled={loading} options={{required: true, minLength: 6}}
            />
            <Button disabled={loading}/>
        </Form>
    );
};

export default LogIn;
