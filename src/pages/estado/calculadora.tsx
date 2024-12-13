//dois campos númericos embaixo exibir o resultado para todas as operações básicas matemáticas.
// soma, multiplicação, subtração e divisão

import Pagina from "@/components/Pagina";
import { IconDivide, IconEqual, IconLetterX, IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";


export default function PaginaCaluladora() {
    const [resultadoSoma, setSoma] = useState<number | undefined>()
    const [resultadoMultiplicacao, setMultiplicacao] = useState<number | undefined>()
    const [resultadoSubtracao, setSubtracao] = useState<number | undefined>()
    const [resultadoDivisao, setDivisao] = useState<number | undefined>()
    const [zIndex, setZIndex] = useState<string | undefined>('-z-10')
    const [primeiroNumero, setPrimeiroNumero] = useState<string | undefined>('')
    const [segundoNumero, setSegundoNumero] = useState<string | undefined>('')
    const [isDisable, setIsDisable] = useState<boolean>(true)
  
    /*
        porque o useEffect?
        necessário pois se não há um delay nos dados, ou seja mudo os estados dos números
        mas as funções não executam os dados atuais e sim os anteriores
    */

    useEffect(() => {
        checkUndefinedFields()
    }, [primeiroNumero, segundoNumero])
    
    function getPrimeiroNumero(evento: any) {
        setPrimeiroNumero(evento.target.value)
        //checkUndefinedFields()
        /*
        if(isDisable === false) {
            setZIndex('-z-10')
        }
        */
    }

    function getSegundoNumero(evento: any) {
        setSegundoNumero(evento.target.value)
        //checkUndefinedFields()
        /*
        if(isDisable === false) {
            setZIndex('-z-10')
        }
        */
    }

    function checkUndefinedFields(){
        if(primeiroNumero === "" || segundoNumero === "" || segundoNumero === '0'){
            setIsDisable(true)
            setZIndex('-z-10')
        } else {
            
            if(isDisable === false) {
                setZIndex('-z-10')
                //executar()
            }
            
            setIsDisable(false)   
        }
    }
   
    function executar(){
        const num1:number = Number(primeiroNumero)
        const num2:number = Number(segundoNumero)
        
        setSoma(num1 + num2)
        setMultiplicacao(num1 * num2)
        setSubtracao(num1 - num2)
        setDivisao(parseFloat((num1 / num2).toFixed(2)))
        setZIndex('z-10')
    }

    return(
        <Pagina titulo="Calculadora" subtitulo="Capítulo Estado">
            <div id="estruturaCampos" className="flex flex-col">
                <div className="flex w-full text-sm text-zinc-600">
                    <span className="w-1/2">Primeiro Número</span>
                    <span className="ml-2">Primeiro Número</span>
                </div>    
                <div className="flex">
                    <input className="input px-1 p-2"title="Primeiro Número" type="number" onChange={getPrimeiroNumero}></input>
                    <input className="input ml-4 p-2 px-1"title="Segundo Número" type="number" onChange={getSegundoNumero}></input>
                </div>
                <button className={`${isDisable? 'botaoDesativado' : 'botao'} mt-2 w-full justify-end`}  onClick={executar} disabled={isDisable} >calcular</button>
                <div className={`flex flex-col items-center mt-5 border-t-2 border-b-2 gap-2 text-4xl font-black ${zIndex}`}>
                    <span className="flex items-center gap-3 pt-2 h-10">
                        {primeiroNumero}{<IconPlus />}{segundoNumero}{<IconEqual />}{resultadoSoma}
                    </span>
                    <span className="flex items-center gap-3 h-10">
                        {primeiroNumero}{<IconLetterX />}{segundoNumero}{<IconEqual />}{resultadoMultiplicacao}
                    </span>
                    <span className="flex items-center gap-3 h-10">
                        {primeiroNumero}{<IconMinus />}{segundoNumero}{<IconEqual />}{resultadoSubtracao}
                    </span>
                    <span className="flex items-center gap-3 pb-2 h-10">
                        {primeiroNumero}{<IconDivide />}{segundoNumero}{<IconEqual />}{resultadoDivisao}
                    </span>
                </div>
            </div>
        </Pagina>        
    )
}