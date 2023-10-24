import { useForm } from "react-hook-form"
import { InputCart } from "../forms/input";
import { SelectCart } from "../forms/select";
import { useContext } from "react";
import { techContext } from "../../../providers/techContext";
import style from "./style.module.scss";

export const CreateTechModal = () => {

    const { addTech, setVisibleModal } = useContext(techContext);

    const { handleSubmit, register } = useForm();

    const submit = (payLoad) => {
        addTech(payLoad);
        setVisibleModal(false);
    }

    return (
        <div role="dialog" className={style.container__Modal}>
            <form onSubmit={handleSubmit(submit)} className={style.container__BoxModal}>

                <div className={style.container__ModalTitle}>
                    <h3 className="title2">Cadastrar tecnologia</h3>
                    <button type="button" onClick={() => { setVisibleModal(false) }} className="paragraph grey">X</button>
                </div>

                <div className={style.container__ModalCart}>
                    <InputCart
                        label="Nome"
                        placeholder="Digite o nome"
                        id="title"
                        {...register("title")}
                        required
                    />
                    <SelectCart
                        label="Selecionar status"
                        {...register("status")}
                    />

                    <button type="submit" className="btn">Cadastrar tecnologia</button>
                </div>
            </form>

        </div>
    )
}