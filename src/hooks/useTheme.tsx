import {useState, useEffect}  from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (key: any, initialState: any) {
    const [state, setState]= useState(() => {
        const storage = localStorage.getItem(key)
    
        if (storage) {
            return JSON.parse(storage)
        } else {
            return initialState;
        }
    })
    
    useEffect(() => {
        localStorage.setItem("teste", JSON.stringify(state));
    }, [key, state])

    return [state, setState]
}

