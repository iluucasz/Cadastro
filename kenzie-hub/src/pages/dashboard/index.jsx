import { useContext, useEffect } from "react";
import { Header } from "../../components/header"
import { userContext } from "../../providers/userContext";
import style from "./style.module.scss";

export const Dashboard = () => {

    const { user, navigate } = useContext(userContext);

    useEffect(() => {
        const noBack = localStorage.getItem("@token");
        if (!noBack) {
            navigate("/");
        }
    }, []);

    if (!user) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <div className={style.dashboard}>
                <div>
                    <Header />
                    <div className={style.line}></div>
                    <main>
                        <section className={style.dashboard__user}>
                            <h2 className="title1">Olá, {user.name}</h2>
                            <p className="headlineBold grey">{user.course_module}</p>
                        </section>
                        <div className={style.line}></div>
                        <section className={style.dashboard__info}>
                            <h2 className="title1">Que pena! Estamos em Desenvolvimento :( </h2>
                            <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )

}