import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { RegisterPage } from "../pages/registerPage";
import { Dashboard } from "../pages/dashboard";
import { ProtectRoutes } from "./ProtectedRoutes";



export const RouterMain = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}