import { ReactNode } from "react";

type Props={  
    onClick?: any, 
    children?:ReactNode, 
    }
    
function ButtonIcon ({onClick, children}:Props) {
   
    return (
        <button className={`buttonIcon`} onClick={onClick}>{children}</button>
    )
}
export { ButtonIcon };