//ao receber parametro a função permite incluir propriedade na TAG
//o console está exibido no terminal pois o componente está no backend
interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
    rounded?: string;
}

export default function Cabecalho(props: CabecalhoProps){
    
    return (
        <div className={`flex flex-col justify-center 
        p-5 bg-gradient-to-r from-zinc-500 to-zinc-900 text-zinc-100  h-16 
        ${props.rounded ? props.rounded : "rounded-none"}`}>
            <h1 className="text-2xl font-black">{props.titulo}</h1>
            <h2 className="text-sm">{props.subtitulo}</h2>
        </div>
    )
}