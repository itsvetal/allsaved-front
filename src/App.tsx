import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";
import MainLayout from "./components/Layouts/MainLayout/MainLayout.tsx";
import Dashboard from "./components/Pages/Dashboard/Dashboard.tsx";
import React from "react";
import {useAuth} from "./context/AuthContext.tsx";
import Login from "./components/Pages/Login/Login.tsx";
import Register from "./components/Pages/Register/Register.tsx";
import Profile from "./components/Pages/Profile/Profile.tsx";
import Posts from "./components/Pages/Posts/Posts.tsx";

function App() {
    const ProtectedRoute: React.FC<{children: React.ReactNode}> = ({children}) => {
        const { isAuth } = useAuth();
        return isAuth ? <>{children}</> : <Navigate to={routes.login} replace />;
    }

    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route path={routes.dashboard} element={<Dashboard />} />
                    <Route path={routes.profile} element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.register} element={<Register />} />
                    <Route path={routes.settings} element={<h1>Settings</h1>} />
                    <Route path={routes.posts} element={<Posts />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
