import React, { useState } from 'react';

function FaqElement({question, answer, isOpen, setIsOpen}:{question: string, answer: string, isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    
    return(
        
        <div className="faq-element-container">
                    <div onClick={() => {setIsOpen(!isOpen)}}>{question}</div>
                    {isOpen ? <p>{answer}</p> : ""}
                </div>
        
    )
}
export {FaqElement};