import { TechCard } from "./techCard";
import { CreateTechModal } from "../modal/createTechModal";
import { useContext } from "react";
import { techContext } from "../../providers/techContext";
import style from "./style.module.scss";
import btnPlus from "../../assets/btnPlus.svg";
import { EditTechModal } from "../modal/editTechModal";

export const TechList = () => {

    const { techList, setVisibleModal, visibleModal, editList } = useContext(techContext);

    return (
        <div className={style.container__techList}>

            {visibleModal ? <CreateTechModal /> : null}
            {editList ? <EditTechModal /> : null}

            <div className={style.container__techTitle}>
                <h3 className="title1">Tecnologias</h3>
                <button onClick={() => setVisibleModal(true)}><img src={btnPlus} alt="adicionar tarefa" /></button>
            </div>

            <ul >
                {techList.map((tech) => {
                    const { id, title, status } = tech;
                    return (
                        <TechCard key={id} title={title} status={status} tech={tech} />
                    );
                })}
            </ul>

        </div>
    );
}