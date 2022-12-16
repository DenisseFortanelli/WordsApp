import { useMutation, useQuery, useQueryClient } from "react-query";
import { createUsers, getUsers } from "../api/MicroServiceOne";

export function getUsersData (){
    return useQuery('users',getUsers,{
       
    })
}

// Metodo para crear usuarios 
export function createUserData() {
	const queryClient = useQueryClient()
	return useMutation(createUsers, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		},
	})
}