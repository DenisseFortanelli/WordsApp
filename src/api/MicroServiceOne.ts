import axios from '../helpers/InterceptorsToken';
import { IUser } from '../interface/FetchAllUserResponse';

export const getUsers = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users`)
	const resp = (response.data)
	return resp
}

export const createUsers = async (user: IUser) => {
	const response = await axios.post(`${import.meta.env.VITE_API_BACKEND}/users`,
		user
	)
	return response.data
};