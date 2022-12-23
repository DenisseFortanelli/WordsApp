import { useState, useEffect } from "react"
import { Params } from "../interface"

const calculateRange = (data:Params[], rowsPerPage:number) => {

    const range:number[] = []
    const num = Math.ceil(data.length / rowsPerPage)

    for (let i = 1; i <= num; i++) {
        range.push(i)
    }
    
    return range

}


const useTable =(data:Params[], page:number, rowsPerPage:number) => {

    const [tableRange, setTableRange] = useState<number[]>([])
    
    useEffect(() => {

        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range])
    
       

    }, [data, setTableRange, page, , rowsPerPage]);

    return { range: tableRange }

}

export default useTable