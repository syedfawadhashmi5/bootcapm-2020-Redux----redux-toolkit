import React from 'react'

function CounterInput(props) {
    return (
        <div>
            <button onClick={() => props.setCounter(props.Counter + 1)}>+</button>
            <button onClick={() => props.setCounter(props.Counter - 1)}>+</button>
        </div>
    )
}

export default CounterInput
