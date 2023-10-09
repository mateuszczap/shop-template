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
            <div className="faq-questions"><h3>Najczęściej zadawane pytania (FAQ)</h3>
                <FaqElement question={"Zadajmy jakieś pytanie?1"} answer={"To jest moja odpowiedź"}/>
                <FaqElement question={"Zadajmy jakieś pytanie?2"} answer={"To jest moja odpowiedź"}/>
                <FaqElement question={"Zadajmy jakieś pytanie?3"} answer={"To jest moja odpowiedź"}/>
                <FaqElement question={"Zadajmy jakieś pytanie?4"} answer={"To jest moja odpowiedź"}/>
                <FaqElement question={"Zadajmy jakieś pytanie?5"} answer={"To jest moja odpowiedź"}/>
                </div>
        </div>
        <Footer/>
        </>
    )
}
export { Faq }