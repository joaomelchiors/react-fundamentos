import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto(){
    const [texto, setTexto] = useState('Inicial...')
    let tempTexto: any = ''

    function alterarTexto(){
        tempTexto = 'alterado'
        setTexto(tempTexto)
    }

    return  (
        <Pagina titulo="Campo de Texto - Travado" subtitulo="Capítulo Estado">
            <div className="block">
                <input className="input rounded-sm outline-purple-900" type="text" value={texto}/>
                <div className="pt-4">Note que o valor do input está definido pelo valor inicial do useState</div>
                <div>E que não é possível alterar ele, pois como já vimos o estado de um elemento</div>
                <div>Só que o estado só é modificado pela função do useState</div>
                <div className="flex items-center h-6 mt-6 gap-2">
                    <button className="flex items-center botao h-full" onClick={alterarTexto}>Enviar</button>
                </div>
                <div className="pt-4">Ao desenvolver uma função acionada pelo botão o texto é modificado</div>
                <div>Pois alteramos o estado, a pergunta é como fazer isso no mesmo campo de texto?</div>
            </div>
        </Pagina>
    )
}