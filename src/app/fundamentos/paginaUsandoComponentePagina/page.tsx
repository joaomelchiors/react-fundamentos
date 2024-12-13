import Pagina from "@/components/Pagina";

export default function Page(){
    return (
        <Pagina titulo="Componente Página" subtitulo="Essa página é renderizada pelo componente página">
            <ul className="list-disc">
                <li id="1">Aca</li>
                <li id="2">Acta</li>
                <li id="3">Ama</li>
                <li id="4">Afa</li>
                <li id="4">Ava</li>
                <li id="3">Aga</li>
            </ul>
        </Pagina>
    )
}