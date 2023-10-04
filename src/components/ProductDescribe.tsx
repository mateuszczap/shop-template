import { Footer } from "./Footer";
import { Header } from "./Header";
import { useParams } from 'react-router-dom';
import { tablica } from '../data/products'
import { Button } from "./Button";
import { useState } from "react";
import { Carousel } from "./Carousel";

function ProductDescribe() {
    const { productName } = useParams();
     const array = tablica.find((element) => element.name === productName)
     
    return (
        <>
        <Header/>
        <div className="main-container-product-describe">
            <div className="inner-container-product-carousel">
                <Carousel/>
            </div>
            <div className="inner-container-product-describe">
                <h2>{productName}</h2>
                <p>Cena: {array?.price}</p>
                {array?.discount && <p>Discount: {array?.discount}</p>}
                <Button text={'Dodaj do koszyka'} color={'black'}/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos temporibus aliquam architecto dolor molestias omnis nobis rem. Similique, tempore reiciendis! Similique quo perferendis voluptatibus. Ex, aut? Porro fugit molestias impedit!</p>
            </div>
        </div>
        <Footer/>
        </>
    )
            }       

export { ProductDescribe };