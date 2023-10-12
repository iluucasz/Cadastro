import { Link } from "react-router-dom";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const submit = (e) => {
        console.log(e);
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Name"
                type="text"
                id="name"
                placeholder="Digite o seu nome"
                required
                {...register("name")}
                error={errors.name}
            />

            <Input
                label="Seu email"
                type="email"
                id="email"
                placeholder="Digite o seu email"
                required
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Crie uma senha"
                type="password"
                id="password"
                placeholder="Digite o seu password"
                required
                {...register("password")}
                error={errors.password}
            />

            <Input
                label="Confirme a senha"
                type="password"
                id="password"
                placeholder="Confirme sua password"
                required
                {...register("againPassword")}
                error={errors.againPassword}
            />

            <div>
                <button type="submit">Criar conta</button>
                <Link to="/">Voltar ao inicio</Link>
            </div>
        </form>

    )
}