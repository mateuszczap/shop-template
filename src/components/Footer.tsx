import { InstaIcon } from './InstaIcon'
import { FacebookIcon } from './FacebookIcon';
import { footerData } from '../data/footerData';
import { NavLink } from 'react-router-dom';

function Footer () {
    return (
    
        <div className='footer-container'>
            <div className='scioalInfo-mainContainer'>
                <div className='socialInfo-iconsFooter'>
                    <InstaIcon></InstaIcon>
                </div>
                <div className='socialInfo-iconsFooter'>
                    <FacebookIcon></FacebookIcon>
                </div>
            </div>
            <div className='navigation-footer'>
                {footerData.map((footerLink) => {
                    return <NavLink to={footerLink.link}>{footerLink.name}</NavLink>
                })}
                
            </div>
        </div>
    )
}
export { Footer };