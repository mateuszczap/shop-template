import { InstaIcon } from './InstaIcon'
import { FacebookIcon } from './FacebookIcon';
import { footerData } from '../data/footerData';

function Footer () {
    return (
    
        <div className='footer-container'>
            <div className='socialInfo-iconsFooter'>
              <InstaIcon></InstaIcon>
              <FacebookIcon></FacebookIcon>
            </div>
            <div className='navigation-footer'>
                {footerData.map((name) => {
                    return <p>{name}</p>
                })}
                
            </div>
        </div>
    )
}
export { Footer };