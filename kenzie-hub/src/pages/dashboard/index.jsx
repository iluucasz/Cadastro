import { Header } from "../../components/header"
import style from "./style.module.scss";

export const Dashboard = ({ user, userLogout }) => {
    return (
        <>
            <div className={style.dashboard}>
                <div>
                    <Header userLogout={userLogout} />
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