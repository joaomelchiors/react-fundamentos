//criar um componente página que muda o titulo, subtitulo e conteúdo
import Cabecalho from "./Cabecalho";
import Conteudo from "./Counteudo";
import Rodape from "./Rodape";
import AreaLateral from "./AreaLateral";

interface PaginaProps {
    titulo: string;
    subtitulo: string;
    children?: any;
}


export default function Pagina(props: PaginaProps){
    const ano = new Date().getFullYear()
    const textoDireita = `Direitos reservados ${ano} - Melchiors DEV`;

    return  (
        
        <div className="flex h-screen bg-black p-2">
            <AreaLateral rounded="rounded-l-xl" />  
            <div className="flex flex-col flex-1">
                <Cabecalho rounded="rounded-tr-xl" titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>{props.children}</Conteudo>
                <Rodape rounded="rounded-br-xl" textoEsquerda="Produzido com " local=" em Brasília." textoDireita={textoDireita}/>
            </div>
        </div>
    )
}