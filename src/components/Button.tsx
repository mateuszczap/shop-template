function Button ({color, text, onClick}:{color?:string, text: string, onClick?: any}) {
   
    return (
        <button className={`button ${color === "black" ? "black" : ""}`} onClick={onClick}>{text}</button>
    )
}
export { Button };