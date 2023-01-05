import './tableStyles.css'
import { ChangeEvent, useState, useEffect, useContext } from 'react';
import { v4 } from 'uuid'
import { columns } from './utils/Columns'
import TableComponent from './TableComponent'
import Tbody from './TBody'
import Td from './Td'
import Th from './Th'
import Thead from './Thead'
import { Tr } from './Tr'
import TFooter from './TFooter'
import { User } from './interface/index'
import styles from './Table.module.css'
import useTable from './hooks/useTable';
import { getUsersData } from '../../hooks/useUsers';
import ModalEditUser from '../Modal/ModalEditUser/ModalEditUser';
import Modal from '../Modal';
import { TableContext } from '../../context/TableContext';
import TableSkeleton from '../../Skeletons/TableSkeleton';

const Table = () => {
    const { state, setDeleteUser, } = useContext(TableContext)
    const { currentUser, isOpenModalEditUser } = state
    /* const [rowsPerPage, setRowsPerPage] = useState<number>(5)
    const [page, setPage] = useState(1) */
    const [pagination, setPagination] = useState({page:1,rowsPerPage:5})
    const [checkAll, setCheckAll] = useState(false)
    //hooks
    const { data, isLoading, refetch, isFetching } = getUsersData(pagination);
    const [_isLoading, setIsLoading] = useState<boolean>(isLoading ? isLoading : false)
    const range = Math.ceil((data?.total_count ?? pagination.rowsPerPage) / pagination.rowsPerPage)
    const pages = Array.from({length: range}, (_, index) => index + 1)

    console.log({pages,range, total:data?.total_count})

    
    
    const handleRowperPage = (number: number) => {
        if(number !== pagination.rowsPerPage) return setPagination((prev)=>({...prev,page:1, rowsPerPage:number})) 
        return setPagination((prev)=>({...prev, rowsPerPage:number})) 
    }
    const handlePage = (number: number) => {
       setPagination((prev)=>({...prev,page:number})) 
         
    }
    
    const handleActions = () => {
        /* console.log('actions'); */
    }
    
    const handleCheck = (e?: ChangeEvent<HTMLInputElement>, user?: User) => {
        let parentElement = e?.target?.parentNode?.parentElement
        if (e?.target.checked) {
            console.log(user?.id);
            
            setDeleteUser(user)
            
            if (parentElement) {
                parentElement.classList.add('selected')
            }
        } else {
            setDeleteUser(undefined)
            if (parentElement) {
                parentElement.classList.remove('selected')
            }
        }
        console.log(e?.target.parentNode?.parentNode);
    }
    
    const handleCheckHeader = (e?: ChangeEvent<HTMLInputElement>) => {
        setCheckAll(e!.target.checked)
    }

    useEffect(()=> {
        refetch()
        console.log(data?.users)
        /* if(data?.users.length == 0) setPage(prev => prev-1) */
    },[pagination])

     useEffect(() => {
        console.log(currentUser)
    }, [currentUser]) 
    

    if(isFetching || isLoading) return <TableSkeleton/>
    

    return (
        <>
            <TableComponent style={{ width: '100%' }}>
                <Thead>
                    <Tr className={styles.trHead}>
                        {
                            columns.map(column => (
                                <Th style={{ width: column.width}} key={v4()}>
                                    {
                                        column.headerName !== 'check' ? <p className={styles.styleheader}>{column.headerName}</p> : 
                                        <input className={styles.inputHeader} type='checkbox' checked={checkAll} onChange={handleCheckHeader} />
                                    }
                                </Th>
                            ))
                        }
                        </Tr>
                    
                </Thead>
                <Tbody>
                    
                    {
                        data! && data.users.map((item:User) =>
                            <Tr key={item.id} className={styles.trBody}>
                                {
                                    columns.map((row, i) => (
                                        <Td  key={v4()} style={{ width: row.width, margin: '0', padding: 0, border: 'none', boxSizing: 'border-box' }}>
                                            {
                                                row.headerName !== 'check' && row.renderCell ? row.renderCell(item, handleActions) :
                                                    row.renderCell && row.renderCell({ ...item, check: checkAll }, handleCheck)
                                            }
                                        </Td>
                                    ))
                                }
                            </Tr>
                            )
                    }
                </Tbody>
                
            </TableComponent>
            
           <TFooter range={pages}  slice={data.users} setPage={handlePage} page={pagination.page} callBack={handleRowperPage} totalItems={data?.total_count ?? pagination.rowsPerPage} rowsPerPage={pagination.rowsPerPage}/>

            {
                currentUser &&
                <Modal isOpen={isOpenModalEditUser}>
                    <ModalEditUser
                        user={currentUser}
                        size='md'
                        textHeader='Edit User'
                    />
                </Modal>
            }
            
           
        </>
    )
}

export default Table