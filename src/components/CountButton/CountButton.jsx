import { useState } from "react"

export const CountButton = () => {


    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prev => prev+1)}>One more</button>
        </>
        )
}