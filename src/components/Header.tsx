
import { NavLink } from 'react-router-dom';
import { headerData } from '../data/headerData';


function Header() {
    return (
        <header className="header">
          <div>
            <NavLink to='/'>
              <img src='/pecker-logo.png' width={100} height={100} className="imgHeader"/>
            </NavLink>
          </div>
          <div className="navigationHeader">
            {headerData.map((item) => {
              return <NavLink to={item.link}>{item.name}</NavLink>
            })}
          </div>
          </header>
    );
  }
  export { Header };