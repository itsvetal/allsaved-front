import instance from "./axios.ts";

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
    const response = await instance.post<AuthResponse>('/login', data);
    return response.data;
};

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
    const response = await instance.post<AuthResponse>('/register', data);
    return response.data;
};

export const logoutUser = async (): Promise<void> => {
    await instance.post('/logout');
};
