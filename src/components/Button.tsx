function Button ({color, text}:{color?:string, text: string}) {
   
    return (
        <button className={`button ${color === "black" ? "black" : ""}`}>{text}</button>
    )
}
export { Button };