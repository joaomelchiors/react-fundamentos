import { IconExposurePlus1 } from '@tabler/icons-react';
//import '../../app/globals.css' importado pelo arquivo passtruth _app.tsx
import Pagina from "@/components/Pagina";

/*
ainda que estejamos incrementado por meio da função acionada pelo evento onClick, não há modificação do HTML, pois para o react
não há alteração no estado da aplicação, neste sentido deve-se controlar o estado da aplicação.
*/

export default function PaginaSemEstado(){
    let valor: number = 0

    function incrementar(){
        valor += 1
        console.log(valor)
    }

    return (
        <Pagina titulo="Sem Estado" subtitulo="Capítulo Estado">
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col justify-center text-center bg-zinc-400 rounded-full'>
                    <div className='flex items-center justify-center rounded-full w-72 h-72 m-2 text-8xl bg-black'>{valor}</div>
                </div>
                <button onClick={incrementar} className='flex botao'>{<IconExposurePlus1 className='flex-1'/>}</button>
            </div>
        </Pagina>
    )
}