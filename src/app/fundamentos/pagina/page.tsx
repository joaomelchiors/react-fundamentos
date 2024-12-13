import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Counteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

//a pagina tem que ser flex, com orientação em coluna, para o flex-1 do componente conteudo poder se esticar.

export default function Page(){
    const ano = new Date().getFullYear()
    const textoDireita = `Direitos reservados ${ano} - Melchiors DEV`;

    return (
        <div className="flex flex-col h-screen bg-black p-2"> 
            <Cabecalho titulo="Minha Aplicação" subtitulo="Melhor app da web"/>
            <div className="flex flex-1 gap-1">
                <Menu />
                <Conteudo>
                    <div id="1"></div>
                    <div id="2"></div>
                    <ul className="list-disc">
                        <li>Ana</li>
                        <li>Gustavo</li>
                        <li>Rebeca</li>
                        <li>Zico</li>
                    </ul>
                </Conteudo>
            </div>
            <Rodape textoEsquerda="Produzido com " local=" em Brasília." textoDireita={textoDireita}/>
        </div>
    )
}