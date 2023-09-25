function Button ({color}:{color?:string}) {
    console.log(color)
    return (
        <button className={`button ${color === "black" ? "black" : ""}`}>Pokaż produkty</button>
    )
}
export { Button };