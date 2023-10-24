import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const techContext = createContext({});

export const TechProvider = ({ children }) => {

    const token = localStorage.getItem("@token");

    const [techList, setTechList] = useState([]);
    const [editList, setEditList] = useState(null);

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
            if (error.message == "Request failed with status code 401") {
                toast.error("Já existe uma tarefa com este nome")
            }
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

    const techUpdate = async (payLoad) => {
        try {
            const { data } = await api.put(`/users/techs/${editList.id}`, payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newPostList = techList.map((post) => {
                if (post.id === editList.id) {
                    return data;
                } else {
                    return post;
                }
            });
            toast.success("Tarefa atualizada com sucesso")
            setTechList(newPostList);
        } catch (error) {
            toast.error(error);
        }
    }

    const techDelete = async (payLoad) => {
        try {
            await api.delete(`/users/techs/${payLoad}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newPostList = techList.filter((post) => post.id !== payLoad);

            setTechList(newPostList);
            toast.success("Exclusão realizada com sucesso!");
        } catch (error) {
            toast.success(error)
        }
    }

    return (
        <techContext.Provider value={
            {
                techList,
                addTech,
                techUpdate,
                setTechList,
                visibleModal,
                setVisibleModal,
                setEditList,
                editList,
                techDelete
            }
        }>
            {children}
        </techContext.Provider>
    )
}