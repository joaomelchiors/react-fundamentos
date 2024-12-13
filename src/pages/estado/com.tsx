import { IconExposurePlus1 } from '@tabler/icons-react';
//import '../../app/globals.css' importado pelo arquivo passtruth _app.tsx
import Pagina from "@/components/Pagina";
import { useState } from 'react';

/*
Para trabalhar com o estado precisamos usar um componente do react = useState()
Este componente retrona uma array com dois valores o primeiro é o valor e o segundo é a função que altera o estado
    const[valor, funcao] = useState() (dessa forma atribuimos o valor para uma variável valor e a funcao a uma variável função)
        O parametro de entrada no useState() pode ser o valor inicial do elemento.
        "setNumber" é um nome qualquer poderia ser "alterarValor"
*/

export default function PaginaComEstado(){
    
    const[valor, setNumber] = useState(0)

    function incrementar(){
        setNumber(valor + 1)
        console.log(valor)
    }

    return (
        <Pagina titulo="Com Estado" subtitulo="Capítulo Estado">
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col justify-center text-center bg-zinc-400 rounded-full'>
                    <div className='flex items-center justify-center rounded-full w-72 h-72 m-2 text-8xl bg-black'>{valor}</div>
                </div>
                <button onClick={incrementar} className='flex botao'>{<IconExposurePlus1 className='flex-1'/>}</button>
            </div>
        </Pagina>
    )
}