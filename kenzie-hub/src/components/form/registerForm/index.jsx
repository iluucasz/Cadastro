import { useNavigate } from "react-router-dom";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { api } from "../../../services/api";
import { Select } from "../select";
import { toast } from "react-toastify";
import { useState } from "react";
import style from "./style.module.scss";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerFormSchema),
    });
    
    const [isHidden, setIsHidden] = useState(true);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userRegister = async (payLoad) => {
        try {
            setLoading(true);
            await api.post("/users", payLoad);
            toast('Conta criada com sucesso');
            navigate("/");
        } catch (error) {
            toast(error.response.data.message)
        } finally {
            setLoading(false);
            reset();
        }
    }

    const submit = (payLoad) => {
        userRegister(payLoad);
    }

    return (
        <div className={style.container__register}>
            <div className={style.register__titles}>
                <h2 className="title2">Crie sua conta</h2>
                <span className="headline grey">Rapido e grátis, vamos nessa</span>
            </div>

            <form onSubmit={handleSubmit(submit)} className={style.container__form}>
                <Input
                    label="Name"
                    type="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    {...register("name")}
                    error={errors.name}
                />

                <Input
                    label="Seu email"
                    type="email"
                    id="email"
                    placeholder="Digite o seu email"
                    {...register("email")}
                    error={errors.email}
                />

                <Input
                    label="Crie uma senha"
                    type={isHidden ? "password" : "text"}
                    id="password"
                    placeholder="Digite o seu password"
                    {...register("password")}
                    error={errors.password}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                />

                <Input
                    label="Confirme a senha"
                    type="password"
                    id="againPassword"
                    placeholder="Confimar Senha"
                    {...register("againPassword")}
                    error={errors.againPassword}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                />

                <Input
                    label="Bio"
                    type="text"
                    id="bio"
                    placeholder="fale sobre você"
                    {...register("bio")}
                    error={errors.bio}
                />
                <Input
                    label="Contato"
                    type="tel"
                    id="tel"
                    placeholder="Opção de contato"
                    {...register("contact")}
                    error={errors.contact}
                />
                <Select
                    label="Selecione um Módulo"
                    id="course_module"
                    placeholder="Primeiro Módulo"
                    {...register("course_module")}
                    error={errors.course_module}
                />

                <div>
                    <button type="submit" disabled={loading} className="btn negative">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}




