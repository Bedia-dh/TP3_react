import { useState } from "react";   
import React from "react";

function MyButton() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    
    function decrement(){
        setCount (count -1);
    }

    return (
        <div>
            Valeur du compteur: {count}
            <button onClick={increment}>
                increment{count}
            </button>
            <button onClick={decrement}>
                decrement{count}
            </button>
        </div>
    );
   
}

export default MyButton;
