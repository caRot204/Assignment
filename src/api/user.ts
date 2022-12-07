import axios from 'axios'
import { IUser } from '../interfaces/user'

const instance = axios.create({
    baseURL: "https://project-hungthinhland-api-main-assignment-react-carot204.vercel.app/api/users",

})
export const register = (user: IUser) => {
    return instance.post('/signup', user)
}

export const login = (user: IUser) => {
    return instance.post('/signin', user)
}

export const getUsersApi = async () => {
    return await instance.get('/users')
}