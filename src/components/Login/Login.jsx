import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component="input" placeholder="login"/>
            </div>
            <div>
                <Field name="password" component="input" placeholder="password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> remember me
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