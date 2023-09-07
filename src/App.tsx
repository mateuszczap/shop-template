import React from 'react';
import { Header }  from './components/Header';
import { Baner } from './components/Baner';
import './App.css';
import { TextWithImage } from './components/TextWithImage'
import { SocialInfo } from './components/SocialInfo';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Baner></Baner>
      <TextWithImage></TextWithImage>
      <SocialInfo></SocialInfo>
      <Footer></Footer>
    </>
  );
}

export default App;
