import React, { useState } from 'react';

function FaqElement() {
    const [isOpen, setIsOpen] = useState(false)
    return(
        
        <div className="faq-element-container">
                    <div onClick={() => {setIsOpen(!isOpen)}}>Jakieś pytanie?</div>
                    {isOpen ? <p>Rozwijany tekst</p> : ""}
                </div>
        
    )
}
export {FaqElement};