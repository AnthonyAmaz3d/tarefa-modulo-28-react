import { useState } from "react";
import './main.css'


const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    
    console.log(peso)
    console.log(altura)
    
    const calculaIMC = () => {
        const imc = peso /(altura ** 2)
        let format = imc.toFixed(2)
        if (imc < 17 ) {
            return(
                <p className="imc">Seu IMC é: {format} e sua situação é: Muito abaixo do peso</p>
            )
        } else if (imc >= 17 && imc <= 18.49 ) {
            return (
                <p className="imc">Seu IMC é: {format} e sua situação é: Abaixo do peso</p>
            )
        } else if (imc >= 18.5 && imc <= 24.99 ) {
            return(
                <p className="imc">Seu IMC é: {format} e sua situação é: Peso normal</p>
            )
        } else if (imc >= 25 && imc <= 29.99 ) {
            return(
                <p className="imc">Seu IMC é: {format} e sua situação é: Acima do peso</p>
            )
        } else if (imc >= 30 && imc <= 34.99) {
            return(
                <p className="imc">Seu IMC é: {format} e sua situação é: Obesidade 1</p>
            )
        } else if (imc >= 35 && imc <= 39.99) {
            return(
                <p className="imc">Seu IMC é: {format} e sua situação é: Obesidade 2 (severa)</p>
            )
        } else if (imc > 40 ) {
            return(
                <p className="imc">Seu IMC é: {format} e sua situação é: Obesidade 3 (cuidado)💀</p>
            )
        }
    }

    
    
    return(
        <>
            <input className="input" type="number" placeholder="Digite seu peso" onChange={({ target }) => setPeso(parseInt(target.value)) } />
            <input className="input" type="number" placeholder="Digite sua altura" onChange={({ target }) => setAltura(parseFloat(target.value)) } />
            {calculaIMC()}
        </>
    )
}

export default Formulario;