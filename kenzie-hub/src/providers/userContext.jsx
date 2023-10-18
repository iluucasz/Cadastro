import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userLogin = async (payLoad, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", payLoad);
            setUser(data.user)
            toast.success("Usuário logado com Sucesso!");
            localStorage.setItem("@token", data.token);
            navigate("/dashboard");
        } catch (error) {
            if (error.response?.data.message == "Incorrect email / password combination") {
                toast.error("Email ou senha incorreto")
            }
        } finally {
            setLoading(false);
            reset()
        }
    }

    const userRegister = async (payLoad, setLoading, reset) => {
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

    useEffect(() => {
        const autoLogin = async () => {
            const token = localStorage.getItem("@token");
            try {
                if (token) {
                    const response = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                }
            } catch (error) {
                toast.error(error);
            }
        }
        autoLogin();
    }, [])

    const userLogout = () => {
        localStorage.removeItem("@token");
        setUser(null);
        navigate("/");
    }

    return (
        <userContext.Provider value={{ user, setUser, userLogin, userLogout, navigate, userRegister }} >
            {children}
        </userContext.Provider >
    )
}