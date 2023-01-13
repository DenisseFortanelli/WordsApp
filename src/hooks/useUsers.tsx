import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createUsers, getUsers, getUsersCards, updateUsers, deleteUsers, getSearchUsers, updateImg} from '../api/MicroServiceOne';

 export function getUsersDataCards (){
    return useQuery('usersCards',getUsersCards,{

    })
}
 
export function getUsersData({ page, rowsPerPage, name }: any) {
	const callback = Boolean(name) ? getSearchUsers({ name }) : getUsers({ page, rowsPerPage })
	return useQuery('users', () => (callback), {
		cacheTime: 0, staleTime: 0
	})
}

/* //Método para buscar usuarios
export function searchUsersData({user}:any){
	return useQuery('searchUsers',()=> getSearchUsers({user}),{
		
	})
} */


// Metodo para crear usuarios 
export function createUserData() {
	const queryClient = useQueryClient()
	return useMutation(createUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})

			await queryClient.invalidateQueries({
				queryKey: ['usersCards']
			})
		},
	})
}

// Metodo para acualizar un usuario
export function updateUserData() {
	const queryClient = useQueryClient()
	return useMutation(updateUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})

			await queryClient.invalidateQueries({
				queryKey: ['usersCards']
			})
		}
	})
}

// Metodo para eliminar usuario
export function deleteUserData() {
	const queryClient = useQueryClient()
	return useMutation(deleteUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})

			await queryClient.invalidateQueries({
				queryKey: ['usersCards']
			})
		}
	})
}


export function updateImgData() {
	const queryClient = useQueryClient()
	return useMutation(updateImg, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})
			await queryClient.invalidateQueries({
				queryKey: ['usersCards']
			})
		},
	})
}