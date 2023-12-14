import { ReactNode } from "react";

type Props={
    color?:string, 
    text: string, 
    onClick?: any, 
    children?:ReactNode, 
    isSmall?:boolean}
    
function Button ({color, text, onClick, children, isSmall}:Props) {
   
    return (
        <button className={`button ${color === "black" ? "black" : ""}`} onClick={onClick}>{text}{children}</button>
    )
}
export { Button };