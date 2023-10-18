import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { RegisterPage } from "../pages/registerPage";
import { Dashboard } from "../pages/dashboard";


export const RouterMain = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}