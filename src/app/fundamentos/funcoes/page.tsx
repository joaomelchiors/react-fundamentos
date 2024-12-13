export default function Page(){
    
    function titulo(){
        return (
            <div>
                <div>Titulo</div>
                <div>Subtitulo</div>
            </div>
        )
    }
    
    return (
        <div>{titulo()}</div>
    )
}