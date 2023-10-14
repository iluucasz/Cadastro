import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { Link, useNavigate } from "react-router-dom";
import { loginFormSchema } from "./loginForm.schema";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import style from './style.module.scss';
import { useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";


export const LoginForm = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginFormSchema),
    })

    const [loading, setLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const navigate = useNavigate();

    const userLogin = async (payLoad) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", payLoad);
            toast('Usuário logado com Sucesso!');
            localStorage.setItem("@token", data.token);
            setUser(data.user)
            navigate("/dashboard");
        } catch (error) {
            if (error.response?.data.message == "Incorrect email / password combination") {
                toast('Email ou senha incorreto')
            }
        } finally {
            setLoading(false);
            reset()
        }
    }

    const submit = (payLoad) => {
        userLogin(payLoad)
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={style.container__login}>
            <div className={style.form__title}>
                <h2 className="title2">Login</h2>
            </div>

            <Input
                label="Email"
                type="email"
                id="email"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Senha"
                type={isHidden ? "password" : "text"}
                id="password"
                {...register("password")}
                error={errors.password}
            />

            <button onClick={() => setIsHidden(!isHidden)} type="button" className={style.hidden}>
                {isHidden ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
            </button>

            <div className={`${style.form__btn}`}>
                <button type="submit" className="btn title2" disabled={loading}>Entrar</button>
                <span className="headline grey">Ainda não possui uma conta?</span>
                <Link to="/register" className="btn grey title2">Cadastre-se</Link>
            </div>

        </form>
    )
}