import { InstaIcon } from './InstaIcon'
import { FacebookIcon } from './FacebookIcon';

function Footer () {
    return (
    
        <div className='footer-container'>
            <div className='socialInfo-iconsFooter'>
              <InstaIcon></InstaIcon>
              <FacebookIcon></FacebookIcon>
            </div>
            <div className='navigation-footer'>
                <p>REGULAMIN</p>
                <p>POLITYKA PRYWATNOŚCI</p>
                <p>KONTAKT</p>
                <p>FAQ</p>
            </div>
        </div>
    )
}
export { Footer };