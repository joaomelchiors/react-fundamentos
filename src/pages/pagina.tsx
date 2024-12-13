import Cabecalho from '@/components/Cabecalho'
//import '../app/globals.css' importado pelo arquivo passtruth _app.tsx
import Conteudo from '@/components/Counteudo'
import Rodape from '@/components/Rodape'
import Menu from '@/components/Menu'

export default function Pagina(){

    function executar() {
        console.log("Botão prescionado")
    }

    return (
        <div className="flex flex-col h-screen p-5 gap-3 bg-black text-white">
            <Cabecalho titulo="Minha Página" subtitulo="Estou na pagina pages" />
            <Menu />
            <Conteudo>
                <button 
                 className='bg-blue-500 p-2 rounded-md'
                 onClick={executar}>
                    Teste
                </button>
            </Conteudo>
            <Rodape />
        </div>
    )
}