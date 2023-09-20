import { Header }  from '../components/Header';
import { Baner } from '../components/Baner';
import { TextWithImage } from '../components/TextWithImage'
import { SocialInfo } from '../components/SocialInfo';
import { Footer } from '../components/Footer';
import { MainTemplate } from '../components/MainTemplate';

function HomePage() {
  return (
    <>
      <MainTemplate>
      <Baner tekstHeader="Interesujemy się najwyższą jakością wykonania z najlepszych gatunków drzew." tekstParagraf="Drewno to niezwykły materiał, którego używa się od wieków do tworzenia pięknych i funkcjonalnych przedmiotów. Jego naturalna ciepło i tekstura dodają uroku każdemu otoczeniu. To materiał, który nie tylko inspiruje rzemieślników, ale także łączy nas z naturą, przypominając o naszych korzeniach."/>
      <TextWithImage></TextWithImage>
      <SocialInfo></SocialInfo>
      </MainTemplate>
    </>
  );
}

export default HomePage;