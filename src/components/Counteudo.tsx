import React from "react";
import { ReactElement, ReactNode } from "react"
import mapearIDs from "@/utils/mapearIDs"
import ConteudoProps from "@/types/props";



export default function Conteudo(props: ConteudoProps){
    console.log(mapearIDs(props))
    return(
        <div className="flex flex-1 justify-center items-center
         bg-zinc-900 text-zinc-100">
            {props.children}
        </div>
    )
}

