import { forwardRef } from "react"
import style from '../loginForm/style.module.scss';

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div className={style.form__login}>
            <label htmlFor={id} className="headline">{label}</label>
            <input ref={ref} {...rest} className="boxInput headline" />
            {error ? <span className="headline red">{error.message}</span> : null}
        </div>
    )
});