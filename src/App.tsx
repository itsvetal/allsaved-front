import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";
import MainLayout from "./components/Layouts/MainLayout/MainLayout.tsx";
import Dashboard from "./components/Pages/Dashboard/Dashboard.tsx";
import React from "react";
import {useAuth} from "./context/AuthContext.tsx";

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
                    <Route path={routes.profile} element={<ProtectedRoute> <h1>Profile</h1> </ProtectedRoute>} />
                    <Route path={routes.login} element={<h1>Login</h1>} />
                    <Route path={routes.register} element={<h1>Register</h1>} />
                    <Route path={routes.settings} element={<h1>Settings</h1>} />
                    <Route path={routes.posts} element={<h1>Posts</h1>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
