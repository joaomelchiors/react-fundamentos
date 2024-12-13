import { Icon360, IconAppWindow, IconBubble, IconCalculator, IconCar, IconCode, IconCodeDots, IconCodePlus, IconFunction, IconHome, IconInputCheck, IconInputX, IconPageBreak, IconSlice, IconSum, IconTicket, IconWindow } from "@tabler/icons-react";
import MenuItem from "./MenuItem";


export default function Menu(props: any) {
    
    return (
        <menu className={`flex flex-col justify-start rounded-none
        w-full p-2 gap-3 text-zinc-600 text-sm ${props.rounded ? props.rounded : "rounded-none"}`}>
            <div id="Estados">
                Estados
                <MenuItem icone={<IconCode />} texto="Componentes sem Estado" href="/estado/sem"/>
                <MenuItem icone={<IconCodeDots />} texto="Componentes com Estado" href="/estado/com"/>
                <MenuItem icone={<IconCodePlus />} texto="Contador" href="/estado/contador"/>
                <MenuItem icone={<IconInputX />} texto="Input Texto Problema" href="/estado/campoTextoTravado"/>
                <MenuItem icone={<IconInputCheck />} texto='Input Texto "OK"' href="/estado/campoTexto"/>
                <MenuItem icone={<IconCalculator />} texto="Calculadora" href="/estado/calculadora"/>
                
            </div>
            <div id="Fundamentos">
                Fundamentos
                <MenuItem icone={<IconFunction />} texto="Funções" href="/fundamentos/funcoes"/>
                <MenuItem icone={<IconSum />} texto="Soma" href="/fundamentos/soma"/>
                <MenuItem icone={<IconPageBreak />} texto="PaginaInApp" href="/fundamentos/pagina"/>
                <MenuItem icone={<IconAppWindow />} texto="PaginaInPages" href="/pagina"/>
                <MenuItem icone={<IconWindow />} texto="PaginaRenderCompPaginas" href="/fundamentos/paginaUsandoComponentePagina"/>
            </div>
            <div id="Componentes">
                Componentes
                <MenuItem icone={<Icon360 />} texto="Básico" href="/componente/basico"/>
                <MenuItem icone={<IconTicket />} texto="Titulo" href="/componente/titulo"/>
                <MenuItem icone={<IconSlice />} texto="Trecho" href="/componente/trecho"/>
                <MenuItem texto="tithus" href="/" icone={<IconCar />}/>
                <div id="joao">TopTithus</div>
            </div>
        </menu>
    )
}