import { User } from "../components/Table/interface";
import { TableContextState } from "./TableContextProvider";

export type Action =
    | { type: 'setCurrentUser', payload: { currentUser: User } }
    | { type: 'setIsOpenModalEditUser', payload: { isOpenModalEditUser: boolean } }
    | {type: 'setShowGlossary', payload:{isShowGlossary:boolean}}
    | { type: 'setIsOpenModalNewCategory', payload: { isOpenModalNewCategory: boolean } }
    | { type: 'setDeleteUser', payload: { deleteUser: User | undefined } }

export const TableReducer = (state: TableContextState, action: Action): TableContextState => {
    switch (action.type) {
        case 'setCurrentUser':
            return {
                ...state,
                currentUser: action.payload.currentUser
            };
        case 'setIsOpenModalEditUser':
            return {
                ...state,
                isOpenModalEditUser: action.payload.isOpenModalEditUser
            };

        case 'setShowGlossary':
                return {
                    ...state,
                    isShowGlossary: action.payload.isShowGlossary
        };
        case 'setIsOpenModalNewCategory':
            return {
                ...state,
                isOpenModalNewCategory: action.payload.isOpenModalNewCategory
            };
        case 'setDeleteUser':
            return {
                ...state,
                deleteUser: action.payload.deleteUser
            };

        default:
            return state;
    }
}