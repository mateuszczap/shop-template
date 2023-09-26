function Button ({color}:{color?:string}) {
   
    return (
        <button className={`button ${color === "black" ? "black" : ""}`}>Pokaż produkty</button>
    )
}
export { Button };