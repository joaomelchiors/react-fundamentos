import ConteudoProps from "@/types/props";
import React, { ReactNode } from "react";

    
export default function mapearIDs(props: ConteudoProps): string[]{

    // Transformar o children em um array usando `React.Children.toArray`
    const childrenArray:ReactNode[] = React.Children.toArray(props.children);
    
    // Array para armazenar IDs encontrados
    const listIDs:string[] = []
    
    
    childrenArray.forEach((child) => {
        // Verifica se é um elemento React válido e se possui um ID
        if (React.isValidElement(child)) {
            if (child.props.id) {
                listIDs.push(child.props.id)
            }
            
            // Verifica se o elemento possui children e chama a função recursivamente
            if (child.props.children) {
                /*
                    o parametro é um objeto que estou criando, pois sei que tem children
                    no elemento do array inicial, que chamei de child. Porém se eu passar
                    só child.props.children o que estou passando é o valor de children 
                    e não o objeto para procurar o ID. Porém podemos ter duas situações
                    se nesse conjunto de valor de children não tivermos chidren, ou seja,
                    só elementos HTML sem corpo e se dentre esses valores tiver elementos
                    html com corpo. Se existir corpo não teremos erro na função pois um 
                    novo children existira, porém como foi passado os valores, não há 
                    o objeto props, logo não encontraremos o props.id para mapear os ids
                    dos primeiros filhos, como a recursividade eliminará o props.id para os 
                    filhos dos filhos também não encontraremos ids. Ou seja não quebra, mas
                    não retorna valores, mas se não tiver children teremos um erro de
                    de interface, pois dentro do paramentro passado não tinha um atributo
                    children. Nesse sentido usamos {children: child.props.children} que é 
                    eu montando durante a passagem do paramentro para a função um objeto
                    composto de um atributo children cujo os valores são child.props.children
                    dessa foram num objeto como esse props: { className: 'list-disc', children: [Array] }
                    eu  estou passando direto o array mas atribuido a children, com isso
                    com isso não perco o objeto children.
                */
                const nestedIDs = mapearIDs({children: child.props.children})
                listIDs.push(...nestedIDs)
            }
        }
    })
    /*
        indexOf() recebe um paramentro e retorna o primeiro indice que aquele elemento foi visto
        no array, logo, ao fazer o filtro eu percorro o elemento e comparo o indice atual com o
        indice que ele apareceu a primeira vez, caso exista a igualdade entre indice filtra o 
        elemento. Lembrando todo a função map, reduce, filter pode passa 3 paramentos: valor,
        indice, array.
    */
    const listIDsUnicos: string[] = listIDs.filter((id, index) => listIDs.indexOf(id) === index);
    return listIDsUnicos
}
