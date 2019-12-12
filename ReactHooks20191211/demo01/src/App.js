import React, {useRef} from 'react';


export default function App() {
    const inputE1 = useRef(null)
    const onButtonClick = () => {
        inputE1.current.value='hellow'
        console.log(inputE1)
    }

    return (
        <div>
            <input type="text" ref={inputE1}/>
            <button onClick={onButtonClick}>1231</button>
        </div>
    );
}
