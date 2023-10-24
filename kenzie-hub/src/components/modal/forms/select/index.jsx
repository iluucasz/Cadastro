import { forwardRef } from "react"
import style from "./style.module.scss";

export const SelectCart = forwardRef(({ label, ...rest }, ref) => {

    return (
        <div className={style.container__formStatus}>
            <label className="headline">{label}</label>
            <select {...rest} ref={ref} className="boxSelect paragraph">
                <option className="paragraph">Iniciante</option>
                <option className="paragraph">Intermediário</option>
                <option className="paragraph">Avançado</option>
            </select>
        </div>
    )
})