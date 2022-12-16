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

const sliceData = (data:Params[], page:number, rowsPerPage:number) => {

    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    
}


const useTable =(data:Params[], page:number, rowsPerPage:number) => {

    const [tableRange, setTableRange] = useState<number[]>([])
    const [slice, setSlice] = useState<Params[]>()
    
    useEffect(() => {

        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range])
    
        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice])

    }, [data, setTableRange, page, setSlice, rowsPerPage]);

    return { slice, range: tableRange }

}

export default useTable