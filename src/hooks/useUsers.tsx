import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createUsers, getUsers, getUsersCards, updateUsers, deleteUsers} from '../api/MicroServiceOne';

 export function getUsersDataCards (){
    return useQuery('usersCards',getUsersCards,{

    })
}
 
export function getUsersData({page,rowsPerPage}:any) {
	return useQuery('users',()=> getUsers({page,rowsPerPage}), {
	})
}


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
	const QueryClient = useQueryClient()
	return useMutation(deleteUsers, {
		onSuccess: async () => {
			await QueryClient.invalidateQueries('users')
		}
	})
}