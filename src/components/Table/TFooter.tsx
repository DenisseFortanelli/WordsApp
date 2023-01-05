import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect } from 'react'
import { TableFooterProps } from './interface'

import styles from './Table.module.css'

const TFooter =  <T extends object>({ range, setPage, page, slice, callBack, totalItems, rowsPerPage}:TableFooterProps<T>) => {

     useEffect(() => {
        /*  console.log({page, rowsPerPage,totalItems, operacion:(rowsPerPage*(page-1)) + slice.length})
         
        console.log({page, rowsPerPage, slice: slice.length}) */
    }, [rowsPerPage]) 

    return (
        <div className={styles.footerContainer}>
        <div className={styles.selectContainer}>
            <p className={styles.textRowsPage}>Rows per page</p>
            <select onChange={(e) => callBack(parseInt(e.target.value))} className={styles.numFooter} value={rowsPerPage}>
                <option>
                    5
                </option>
                <option>
                    10
                </option>
                <option>
                    15
                </option>
            </select>
        </div>
        <div className={styles.footerShowing}>
            <p className={styles.textShowing}>{`Showing ${(rowsPerPage*(page-1)) + slice.length} of ${totalItems} Results`}</p>
        </div>
        <div className={styles.stylePagination}>
            <div onClick={() => setPage(page > 1 ? (page - 1) : page)}>
                <CaretLeft size={16} style={{ color: '#E5E5E5' }} />
            </div>
            {
                range.map((el, index) => (
                    <div
                        className={styles.numberPagination}
                        style={{ background: el === page ? '#F5F5F5' : 'transparent' }}
                        key={index}
                        onClick={() => setPage(el)}
                    >
                        {el}
                    </div>
                ))
            }
            <div onClick={() => setPage(page < range.length ? (page + 1) : page)}>
                <CaretRight size={16} style={{ color: '#A3A3A3', marginLeft: 2 }} />
            </div>
        </div>
    </div>
    )
}

export default TFooter