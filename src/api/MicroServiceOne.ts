import axios from '../helpers/InterceptorsToken';

export const getUsers = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users`)
	const resp = (response.data.data)
	return resp
}
