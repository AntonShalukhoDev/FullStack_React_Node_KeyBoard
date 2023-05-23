import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "./consts";

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export const post = async (url: string, body?: string | boolean | number | object | null): Promise<AxiosResponse<AuthResponse>> => {
    return api.post(url, body)
}
export const get = async (url: string, ): Promise<AxiosResponse<AuthResponse>> => {
    const api = axios.create({
        withCredentials: true,
    })

    return api.get(url)
}
export const put = async (url: string, body: string | boolean | number | object | null): Promise<AxiosResponse<AuthResponse>> => {
    return api.put(url, body)
}