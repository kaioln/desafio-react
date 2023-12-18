import { useState } from 'react';

export const ManageData = () => {

    const [number, setNumber] = useState(30);

    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(50)}>Atualizar</button>
        </div>
    )
}