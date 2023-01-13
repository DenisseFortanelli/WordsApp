import axios from '../helpers/InterceptorsToken';
import { IUser } from '../interface/FetchAllUserResponse';

export const getUsersCards = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users?page=1&page_size=20`)
	const resp = (response.data)
	return resp
}

export const getUsers = async ({page,rowsPerPage}:any) => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users?page=${page}&page_size=${rowsPerPage}`)
	const resp = (response.data)
	return resp
}

export const createUsers = async (user: IUser) => {
	const response = await axios.post(`${import.meta.env.VITE_API_BACKEND}/users`,
		user
	)
	return response.data
};

export const updateUsers = async (user: IUser) => {
	const response = await axios.put(`${import.meta.env.VITE_API_BACKEND}/users/${user.id}/update`,
		user
	)
	return response.data
};


export const deleteUsers = async (user: IUser) => {
	const response = await axios.delete(`${import.meta.env.VITE_API_BACKEND}/users/${user.id}`,
	)
	return response.data
};

export const getImg = async (user: IUser) => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users/image/${user.image}`)
	return response.data
};

export const updateImg = async ({ id, data }: { id: string | undefined, data: FormData }) => {
	const response = await axios.put(`${import.meta.env.VITE_API_BACKEND}/users/upload_avatar/${id}`,
		data,
		{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
	)
	return response.data
}

export const getSearchUsers = async ({ name }: any) => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/search?page=1&page_size=10&name=${name}`)
	const resp = (response.data)
	return resp
}