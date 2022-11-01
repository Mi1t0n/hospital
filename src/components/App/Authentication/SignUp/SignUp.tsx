import FormType from '../FormType/FormType';
import {IsignUpInputs} from "interfaces/IComponents/IAuthenticationInputs";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {singUp} from "redux/slices/authSlice/authSlice";
import Input from "components/shared/Forms/Input/Input";
import Form from "components/shared/Forms/Form/Form";
import Button from "../../../shared/Forms/Button/Button";


const SignUp = () => {
    const dispatch = useAppDispatch();
    const {loading} = useAppSelector(state => state.auth)
    const signUpSubmitHandler = ({email, password, firstName, lastName}: IsignUpInputs) =>
        dispatch(singUp({email, password, fullName: `${firstName} ${lastName}`}))

    return (
        <Form onSubmit={signUpSubmitHandler}>
            <FormType isLoading={loading}/>
            <Input name={'email'} type={'email'}
                   disabled={loading} options={{required: true}}
            />
            <Input name={'password'} type={'password'}
                   disabled={loading} options={{required: true}}
            />
            <Input name={'lastName'} type={'text'}
                   disabled={loading} options={{required: true}}
            />
            <Input name={'lastName'} type={'text'}
                   disabled={loading} options={{required: true}}
            />
            <Button disabled={loading}/>
        </Form>
    );
};


export default SignUp;
