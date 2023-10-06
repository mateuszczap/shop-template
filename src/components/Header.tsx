
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
          <div>
            <img src='/pecker-logo.png' width={100} height={100} className="imgHeader"/>
          </div>
          <div className="navigationHeader">
            <NavLink to={'/product-page'}>Katalog Produktów</NavLink>
            <NavLink to={'/about-me'}>O mnie</NavLink>
            <NavLink to={'/contact'}>Kontakt</NavLink>
            <NavLink to={'/faq'}>FAQ</NavLink>
            <NavLink to={'/shop-basket'}>Koszyk</NavLink>
          </div>
          </header>
    );
  }
  export { Header };