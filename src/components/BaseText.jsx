function Base({ counter, buttonIncrease, buttonDecrease, resetCounter }){
    const classePosNeg = counter < 0 ? 'red-text' : 'white-text'

    return(
    <div>
        <h1>You clicked the button
            <span id="counter" className={classePosNeg}> {counter} </span>
            times
        </h1>
        <div>
            <button onClick={buttonIncrease} className="button">Increase</button>
            <button onClick={buttonDecrease} className="button">Decrease</button>
            <button onClick={resetCounter} className="button">Start Again</button>
        </div>
    </div>
    )
}

export default Base