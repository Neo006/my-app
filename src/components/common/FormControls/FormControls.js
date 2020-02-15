import React from 'react';
import s from './formControls.module.css';

const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={s.formControls + ' ' + (hasError ? s.error : '')}>
            {props.children}
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

/*
export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={s.formControls + ' ' + (hasError ? s.error : '')}>
            <textarea {...input} {...props} />
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={s.formControls + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props} />
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}*/
