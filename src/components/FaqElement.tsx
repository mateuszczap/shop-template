import React, { useState } from 'react';

function FaqElement({question, answer}:{question: string, answer: string}) {
    const [isOpen, setIsOpen] = useState(false)
    return(
        
        <div className="faq-element-container">
                    <div onClick={() => {setIsOpen(!isOpen)}}>{question}</div>
                    {isOpen ? <p>{answer}</p> : ""}
                </div>
        
    )
}
export {FaqElement};