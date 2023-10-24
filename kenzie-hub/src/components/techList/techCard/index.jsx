import style from "./style.module.scss"
import { MdEdit, MdDelete } from "react-icons/md"

export const TechCard = ({ title, status }) => {

    return (
        <li className={style.container__TechCard} >
            <div>
                <h3 className="title2">{title}</h3>
            </div>

            <div>
                <p className="headline grey">{status}</p>
                <button aria-label="editar">
                    <MdEdit />
                </button>
                <button aria-label="deletar">
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}