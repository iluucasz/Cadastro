import { useContext } from "react";
import style from "./style.module.scss";
import { MdEdit, MdDelete } from "react-icons/md";
import { techContext } from "../../../providers/techContext";

export const TechCard = ({ title, status, tech }) => {
    const { setEditList, techDelete } = useContext(techContext);

    return (

        <li className={style.container__TechCard} >
            <div>
                <h3 className="title2">{title}</h3>
            </div>

            <div>
                <p className="headline grey">{status}</p>

                <button aria-label="editar" onClick={() => { setEditList(tech) }}>
                    <MdEdit />
                </button>

                <button aria-label="deletar" onClick={() => techDelete(tech.id)}>
                    <MdDelete />
                </button>
            </div>
        </li>

    )
}