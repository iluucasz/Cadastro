import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div className={style.container__select}>
            <label htmlFor={id} className="headline">{label}</label>
            <select
                ref={ref}
                id={id}
                {...rest}
                className="boxSelect"
            >
                <option>Primeiro Módulo</option>
                <option>Segundo Módulo</option>
                <option>Terceiro Módulo</option>
                <option>Quarto Módulo</option>
                <option>Quinto Módulo</option>
                <option>Sexto Módulo</option>
            </select>
            {error ? <span>{error.message}</span> : null}
        </div>
    );
});