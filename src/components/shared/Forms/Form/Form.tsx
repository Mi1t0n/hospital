import {createElement, FC} from "react";
import {IForm} from "interfaces/IComponents/IForm";
import {useForm} from "react-hook-form";


const Form: FC<IForm> = ({defaultValues, children, onSubmit ,myClassName}) => {
    const {handleSubmit, register,formState:{errors},} = useForm({defaultValues});
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={myClassName}>
            {
                Array.isArray(children)
                    ? children.map(child => {
                        return child.props.name
                            ? createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register,errors,
                                    key: child.props.name
                                }
                            })
                            : child;
                    })
                    : children
            }
        </form>
    )
}


export default Form;