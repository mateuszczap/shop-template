
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
          <div>
            <img src='/pecker-logo.png' width={100} height={100} className="imgHeader"/>
          </div>
          <div className="navigationHeader">
            <NavLink to={'product-page'}>Katalog Produktów</NavLink>
            <p>O mnie</p>
            <p>Kontakt</p>
            <p>FAQ</p>
            <p>Koszyk</p>
          </div>
          </header>
    );
  }
  export { Header };