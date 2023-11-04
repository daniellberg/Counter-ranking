function Base({ counter, buttonIncrease, buttonDecrease }){
    return(
        
    <div>
        <h1>You clicked the button
            <span id="counter"> {counter} </span>
            times
        </h1>
        <div>
            <button onClick={buttonIncrease} className="button">Increase</button>
            <button onClick={buttonDecrease} className="button">Decrease</button>
        </div>
    </div>
    )
}

export default Base