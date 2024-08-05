// a component is a function and a prop is a parameter or argument

//Whenever you are using a map, you need to assign a key to the div.
function greet({ names }) {// decomposed with {} otherwise need to use props
    return (
        <div>
            {names.map((name, index) => {
                return (
                    <div key={index}>
                        <p>Hello nice to mee you {name}</p>
                    </div>
                );
            })}
        </div>

    );
}

export default greet;

// app.jsx should be
<Greet name={["Tim, Su"]} />

// In HTML events look like this:
// <button onclick="functionToCall()">

// In JSX events look like this:
// <button onClick={functionToCall}></button>

function Button({ text, count }) {
    const onClickHandler = (text) => {
        alert(text);
    };
    return (
        <div>
            <button onClick={() => onClickHandler('hi')}> // if you want to pass arguments you need to use an anonymous function
                {text}
                {count}{' '}
            </button>
        </div>
    );
}

export default Button;


//================================
import { useState } from 'react'

function SomeComponent() {
    const [state, setState] = useState('something')//useState is the initial value or default count. setState can directly manipulate state

    return (
        <div>
            {state}
        </div>
    )
}


// set counter:
// const [count, setCount] = useState(0);
//<button onClick={() => setCount{count + 1}}.count is {count}</button>
//whatever argument you pass on setState will affect state
// EXPLAIN REACT 19 ON YOUTUBE. Go through the docs.

// TO TOGGLE BETWEEN STATES SHOW OR HIDE:
function HiddenMessage() {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    };

    return (
        <>
            {show ? <p>I’m hidden!</p> : null}
            <button onClick={toggle}>Show/Hide</button>
        </>
    );
}

// ANOTHER EXAMPLE:
function Warning() {
    const [showWarning, setShowWarning] = useState(true);
    if (showWarning)
        return (
            <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                <strong>Warning!</strong> If you dismiss this, you will see a disturbing image.
                <button className='close' onClick={() => setShowWarning(!setShowWarning)}>
                    <span>&times;</span>
                </button>
            </div>
        );
    else//line 90 shows the image but line 99 toggles it
        return (
            <img
                src=''
                onClick={() => setShowWarning(!setShowWarning)}>/
            </img>
        )
}
