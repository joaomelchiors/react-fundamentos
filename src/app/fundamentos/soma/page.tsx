export default function Page(){
    const nome = 'João';
    const idade = 40;
    return (
        <div>
            <div>{nome} {idade}</div>
            <div>{Math.random()}</div>
            <div>{20+30}</div>  
        </div>
    )
}