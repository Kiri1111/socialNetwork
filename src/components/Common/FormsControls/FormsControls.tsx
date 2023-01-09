import React from "react";
import s from "./FormsControl.module.css"

type TextareaPropsType = {
    input: any
    meta: any
}

export const Textarea = (props: TextareaPropsType) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...props.input}{...props}/>
            </div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = (props: TextareaPropsType) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...props.input}{...props}/>
            </div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}