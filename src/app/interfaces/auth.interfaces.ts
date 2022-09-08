export interface LoginResponse {
    msg: string;
    token: string;
    userInfo: UserInfo;
}

export interface UserInfo {
    age: number;
    city: string;
    documentNumber: string;
    email: string;
    lastName: string;
    name: string;
    pass: string;
    phone: string;
}

export interface LoginInfo {
    documentNumber: string;
    password: string;
}
