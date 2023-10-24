import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { SelectCart } from "../forms/select";
import { InputCart } from "../forms/input";
import { useContext } from "react";
import { techContext } from "../../../providers/techContext";

export const EditTechModal = () => {

    const { setEditList, editList, techUpdate } = useContext(techContext);

    const { handleSubmit, register } = useForm(
        {
            values: {
                status: editList.status
            }
        }
    );

    const submit = (payLoad) => {
        techUpdate(payLoad)
        setEditList(null);
    }

    return (
        <div role="dialog" className={style.container__Modal}>
            <form onSubmit={handleSubmit(submit)} className={style.container__BoxModal}>

                <div className={style.container__ModalTitle}>
                    <h3 className="title2">Tecnologia detalhes</h3>
                    <button type="button" onClick={() => { setEditList(null) }} className="paragraph grey">X</button>
                </div>

                <div className={style.container__ModalCart}>
                    <InputCart
                        label="Nome"
                        placeholder={editList.title}
                        id="title"
                        disabled={true}
                    />
                    <SelectCart
                        label="Selecionar status"
                        {...register("status")}
                    />

                    <button type="submit" className="btn">Salvar alterações</button>
                </div>

            </form>
        </div>
    )
}