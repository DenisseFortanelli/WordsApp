import axios from "axios"

export const getCategory = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API2_BACKEND}/categories?page=1&page_size=5`)
	const resp = (response.data)
	return resp
}