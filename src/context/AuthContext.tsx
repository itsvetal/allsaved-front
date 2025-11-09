import React, {createContext, useEffect, useState} from 'react';
import instance from "../api/axios.ts";
import {AxiosError} from "axios";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    isAuth: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [token, setToken] = React.useState<string | null>(localStorage.getItem('token'));
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

    const fetchUser = async () => {
        if (!token) {
            return;
        }

        try {
            const response = await instance.get('/user');
            setUser(response.data);
            setIsAuth(true);
        } catch (error) {
            console.error('Error fetching user:', error);
            if (error instanceof AxiosError) {
                if (error?.response && error.response?.status === 401) {
                    logout();
                }
            }
        }
    };

    useEffect(() => {
        fetchUser();
    }, [token]);

    const login = (user: User, token: string) => {
        setUser(user);
        setToken(token);
        localStorage.setItem('token', token);
        setIsAuth(true);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        setIsAuth(false);
    };

    const value = {
        user,
        token,
        login,
        logout,
        isAuth,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};



