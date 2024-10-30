import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(1);

    const handleAdd = () => setCount(count + 1)
    const handleSubtract = () => setCount(count - 1)
    const handleRandom = () => setCount(Math.floor(Math.random() * 101))

    return (
        <div className="counter">
            Product counter
            <p className="value"> {count} </p>
            <button className="add-button" onClick={handleAdd}> + </button>
            <button className="subtract-button" onClick={handleSubtract}> - </button>
            <button className="random-button" onClick={handleRandom}> Surprise me! </button>

        </div>
    )
}

export default Counter