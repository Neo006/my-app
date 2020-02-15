import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" placeholder="login"
                       validate={required}
                       component={Input}/>
            </div>
            <div>
                <Field name="password" placeholder="password"
                       validate={required}
                       component={Input}/>
            </div>
            <div>
                <Field name="rememberMe" type="checkbox"
                       component={Input}/> remember me
            </div>
            <div>
                <button className="btn btn-success">Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const submit = formData => {
        console.log(formData);
    }

    return (
        <div className="col-md-10">
            <h3>Login</h3>
            <LoginReduxForm onSubmit={submit} />
        </div>
    );
}

export default Login;