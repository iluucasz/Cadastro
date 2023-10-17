import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { RegisterPage } from "../pages/registerPage";
import { Dashboard } from "../pages/dashboard";
import { useState } from "react";

export const RouterMain = () => {
    const [user, setUser] = useState(null);

    const userLogout = () => {
        localStorage.removeItem("@token");
        setUser(null);
        navigator("/");
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard user={user} userLogout={userLogout} />} />
        </Routes>
    )
}