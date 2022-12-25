import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '684eff9d-e0dd-4a17-afd8-b12aca48e4cc'
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
        .then(response => response.data)
}
export const followChange = (userId: number) => {
    return instance.post(`follow/${userId}`)
    // .then(response => response.data)
}
export const unFollowChange = (userId: number) => {
    return instance.delete(`follow/${userId}`)
    // .then(response => response.data)
}