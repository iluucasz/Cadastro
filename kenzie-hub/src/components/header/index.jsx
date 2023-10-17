import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import style from "./style.module.scss";
import { useContext } from "react";
import { userContext } from "../../providers/userContext";

export const Header = () => {

    const { userLogout } = useContext(userContext);

    const token = localStorage.getItem("@token");

    return (
        <header className={style.container__header}>
            <Link to="/">
                <figure>
                    <img src={Logo} alt="logo da página" />
                </figure>
            </Link>
            {token ? (
                <Link to="/">
                    <button onClick={() => userLogout()} className={`${style.header__btn} btn small grey headlineBold grey0`}>Sair</button>
                </Link>
            ) : (
                <Link to="/">
                    <button className={`${style.header__btn} btn small grey headlineBold grey0`}>Voltar</button>
                </Link>
            )}
        </header>
    );
};
