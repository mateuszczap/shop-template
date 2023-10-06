import { FaqElement } from "./FaqElement";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React, { useState } from 'react';

function Faq() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <Header/>
        <div>
            <div className="faq-questions">Najczęściej zadawane pytania (FAQ)
                <FaqElement/>
                <FaqElement/>
                <FaqElement/>
                <FaqElement/>
                <FaqElement/>
                </div>
        </div>
        <Footer/>
        </>
    )
}
export { Faq }