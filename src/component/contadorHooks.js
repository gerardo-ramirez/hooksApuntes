import React, { useState } from 'react';

const ContadorHooks = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Clickeando : {count} </p>
            <button
                onClick={() => setCount(count + 1)}

            >Click me</button>
        </div>
    )

}
export default ContadorHooks;