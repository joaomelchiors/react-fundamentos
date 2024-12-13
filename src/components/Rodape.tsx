import { IconHeart } from "@tabler/icons-react"

export default function Rodape(props: any){

    return (
        <div className={`flex justify-between items-center 
        h-14 bg-zinc-900 border-t border-zinc-700 text-zinc-500 text-base
        ${props.rounded ? props.rounded : "rounded-none"}`}>
            <div className="flex p-5">
                <div id="textoEsquerda">{props.textoEsquerda}❤️</div>
                <div id="local">{props.local}</div>
            </div>
            <div id="textoDireita" className="p-10">{props.textoDireita}</div>
        </div>
    )
}