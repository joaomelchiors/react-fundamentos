export default function Page(){
    const trecho = <div>Trecho#1</div>
    const trechoArray = [
        <div>Trecho#2</div>,
        <div>Trecho#3</div>,
        <div>Trecho#4</div>
    ]
    return (
        [trechoArray[0], trecho]
    )
}