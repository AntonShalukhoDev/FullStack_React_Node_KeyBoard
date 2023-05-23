import {IUser} from '../IUser'

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}

export interface AuthResponsLogin {
    tokens: Tokens,
    name: string
}

interface Tokens {
    accessToken: string,
    refreshToken: string,
}