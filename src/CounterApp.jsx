import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const sumar = () => {
        //setCounter(counter + 1)
        setCounter((c) => c + 1)//c tiene el valor counter actual, le suma 1 y carga counter con setCounter
    }

    return <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={sumar}>
            +1
        </button>
    </>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}