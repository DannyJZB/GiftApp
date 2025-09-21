import { useState } from 'react'

export const useCounter = (initialValue: number = 10) => {
    const [counter, setcounter] = useState(initialValue)

    const handleAdd = () => {
        setcounter(counter + 1);
    }

    const handleSubstract = () => {
        setcounter((prevState) => prevState - 1); //Se usa prevState por que aveces no se tiene acceso a counter, pero se le pone el nombre que uno quiera
    }

    const handleReset = () => {
        setcounter(initialValue);
    }

    return {
        //Values
        counter,

        //Methods / Actions
        handleAdd,
        handleSubstract,
        handleReset
    }
}
