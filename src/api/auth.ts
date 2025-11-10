import instance from "./axios.ts";

export interface LoginData {
    email: string;
    password: string;
    loggedIn: boolean
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
    return await instance.post('/login', data);
};

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
    return await instance.post('/register', data);
};

export const logoutUser = async (): Promise<void> => {
    await instance.post('/logout');
};
