import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers";
import { Input } from "../input";
import { Link } from "react-router-dom";
import { loginFormSchema } from "./loginForm.schema";


export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    })

    const submit = (e) => {
        console.log(e);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Seu email" type="email" id="email" {...register("email")}
                error={errors.email} />

            <Input label="Sua senha" type="password" id="password" {...register("password")}
                error={errors.password} />

            <div>
                <button type="submit">Fazer Login</button>
                <Link to="/register">Cadastre-se</Link>
            </div>
        </form>
    )
}