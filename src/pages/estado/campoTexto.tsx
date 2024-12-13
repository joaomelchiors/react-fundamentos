import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto(){
    const [texto, setTexto] = useState('Inicial...')

    /*
        se lembrarmos na DOM, as ações carregam objeto chamados eventos, composto por atributos
        então podemos chamar pegar os atributos desse eventos e passar para dentro da função que 
        mudará o estado do objeto.
        Neste caso o onChange passa o evento composto do atributo 
    */

    function alterarTexto(evento: any) {
        setTexto(evento.target.value)
    }

    return  (
        <Pagina titulo="Campo de Texto - Travado" subtitulo="Capítulo Estado">
            <div className="flex flex-col">
                <input className="input rounded-sm outline-purple-900" type="text" value={texto} onChange={alterarTexto}/>
                <span className="mt-2">Valor Digitado: {texto}</span>

            </div>
        </Pagina>
    )
}