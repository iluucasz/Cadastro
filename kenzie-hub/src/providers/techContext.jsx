import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const techContext = createContext({});

export const TechProvider = ({ children }) => {

    const token = localStorage.getItem("@token");

    const [techList, setTechList] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);

    const addTech = async (payLoad) => {
        try {
            const { data } = await api.post("/users/techs", payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTechList([...techList, data]);
            toast.success("Tecnologia adicionada com sucesso.");
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        const viewTechs = async () => {
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTechList(data.techs);
            } catch (error) {
                toast.error(error);
            }
        };
        viewTechs();
    }, []);


    return (
        <techContext.Provider value={{ techList, addTech, setTechList, visibleModal, setVisibleModal }}>
            {children}
        </techContext.Provider>
    )
}