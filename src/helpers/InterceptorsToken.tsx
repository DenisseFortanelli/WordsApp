import { GetTokenSilentlyOptions } from '@auth0/auth0-react'
import axios,{ AxiosRequestConfig } from 'axios';

const instance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_BASE_URL ?? 'http://localhost:4000'
})

export const AddAccessTokenInterceptor = (getAccessTokenSilently : {
	( option?: GetTokenSilentlyOptions ): Promise<string>;

}) => {
	instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
		const token = await getAccessTokenSilently();
		config.headers = config.headers ?? {};
		config.headers.Authorization = `Bearer ${token}`; 
		return config
	  });
	}

export default instance;