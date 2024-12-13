import { IconExposureMinus1, IconExposurePlus1, IconPlus, IconRefresh } from '@tabler/icons-react';
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

export default function PaginaContador(){
    
    const[valor, setNumber] = useState(0)
    const[isHovered, setIsHovered] = useState(false)
    const[delta, setDelta] = useState(1)

    function incrementar(){
        setNumber(valor + delta)
        //console.log(valor)
        setIsHovered(true)
        //console.log(isHovered);
        setTimeout(()=>{
            setIsHovered(false)
        }, 30)
    }

    function reset(){
        setNumber(0)
    }

    function incrementarrDelta(){
        setDelta(delta + 1)
    }

    function decrementarDelta(){
        setDelta(delta - 1)
    }

    return (
        <Pagina titulo="Contador, Incluindo CSS transition" subtitulo="Capítulo Estado">
            <div id="formatacaoConteudo" className='flex justify-center gap-40 w-full'>
                <div id="areaMenu"className='flex flex-col items-center w-[300px] p-6 gap-3'>
                    <span>Quantidade de Incrementos</span>
                    <button className='flex justify-center w-full botao'
                     onClick={incrementarrDelta}><IconExposurePlus1/></button>
                    <button className='flex justify-center w-full botao'
                     onClick={decrementarDelta}><IconExposureMinus1 /></button>
                    <div className='flex items-center justify-center bg-black rounded-md border-2 border-zinc-400 border-solid w-[100px] h-[100px] text-5xl'>{delta}</div>
                </div>
                
                <div id="areaIncremento" className='flex flex-col gap-3'>
                    <div id="circulo" className='flex flex-col justify-center text-center bg-black-400 rounded-full border-4 border-zinc-400 border-solid'>
                        <div className={`flex items-center justify-center rounded-full w-72 h-72 m-2 text-8xl
                            ${isHovered ? 'gradiente' : 'bg-black '}`}>{valor}</div>
                    </div>
                    <div id="areaDosBotoes" className='flex w-full gap-3'>
                        <button id="btnIncrementar" onClick={incrementar} 
                            className='flex-1 flex justify-center botao'>
                                {<IconPlus className='flex-1'/>}
                        </button>
                        <button id="btnReset" onClick={reset} 
                            className='flex-1 flex justify-center botao'>
                                {<IconRefresh className='flex-1'/>}
                        </button>
                    </div>
                </div>
            </div>
        </Pagina>
    )
}