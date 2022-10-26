import {useForm} from 'react-hook-form';
import FormType from '../FormType/FormType';
import {IsignUpInputs} from "interfaces/IComponents/IAuthenticationInputs";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {singUp} from "redux/slices/authSlice/authSlice";


const SignUp = () => {
    const dispatch = useAppDispatch();
    const {loading} = useAppSelector(state => state.auth)
    const {register, formState: {errors}, handleSubmit} = useForm<IsignUpInputs>();
    const signUpSubmitHandler = ({email, password, firstName, lastName}: IsignUpInputs) => {
        dispatch(singUp({email, password, fullName: `${firstName} ${lastName}`}))
    };
    return (
        <form onSubmit={handleSubmit(signUpSubmitHandler)}>
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
            <div>
                <label>{errors.firstName ? <span>FirstName is required</span> : 'FirstName'}</label>
                <input type={'text'} disabled={loading}
                       {...register('firstName', {required: true})}
                />
            </div>
            <div>
                <label>{errors.lastName ? <span>LastName is required</span> : 'LastName'}</label>
                <input type={'text'} disabled={loading}
                       {...register('lastName', {required: true})}
                />
            </div>
            <input type="submit" disabled={loading}/>
        </form>
    );
};


export default SignUp;
