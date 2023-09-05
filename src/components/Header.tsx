

function Header() {
    return (
        <header className="header">
          <div>
            <img src='pecker-logo.png' width={100} height={100} className="imgHeader"/>
          </div>
          <div className="naviagtionHeader">
            <p>Katalog Produktów</p>
            <p>O mnie</p>
            <p>Kontakt</p>
            <p>FAQ</p>
            <p>Koszyk</p>
          </div>
          </header>
    );
  }
  export { Header };