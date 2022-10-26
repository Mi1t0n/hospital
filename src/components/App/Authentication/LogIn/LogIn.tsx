import {useForm} from 'react-hook-form';
import FormType from '../FormType/FormType';
import {IlogInInputs} from "interfaces/IComponents/IAuthenticationInputs";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {logIn} from "redux/slices/authSlice/authSlice";


const LogIn = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<IlogInInputs>();
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector(state => state.auth)
    const logInSubmitHandler = ({email, password}: IlogInInputs) => dispatch(logIn({email, password}))

    return (
        <form onSubmit={handleSubmit(logInSubmitHandler)}>
            <FormType isLoading={loading}/>
            <div>
                <label>{errors.email ? <span>Email is required</span> : 'Email'}</label>
                <input type={'email'} disabled={loading}
                       {...register('email', {required: true})}
                />
            </div>
            <div>
                <label>{errors.password ? <span>Password is required</span> : 'Password'}</label>
                <input type={'password'} disabled={loading}
                       {...register('password', {required: true, minLength: 6})}
                />
            </div>
            <input type="submit" disabled={loading}/>
        </form>
    );
};

export default LogIn;
