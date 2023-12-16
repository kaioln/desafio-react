import React from "react";
import './App.css';

export const Challenge = () => {

    const handleMyEvent = (e) => {

        const numero1 = 5
        const numero2 = 10
        const resultado = numero1 + numero2

        console.log(`A soma do ${numero1} + o ${numero2} é ${resultado}`);

        console.log('Você clicou no Botão!')
    }

    return <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
    </div>
}