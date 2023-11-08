import { InstaIcon } from './InstaIcon'
import { FacebookIcon } from './FacebookIcon';

function SocialInfo () {
    return (
        <div className='socialInfo-container'>
            <h3>DOŁĄCZ DO MOJEJ SPOŁECZNOŚCI</h3>
            <p>Obserwuj mnie aby być na bieżąco z moimi nowymi pracami, odkryć <br/> kulisy mojej twórczości i dowiedzieć się, kiedy będą dostępne nowe produkty</p>
            <div className='scialInfo-container'>
                <div className='socialInfo-iconsFooter'>
                    <InstaIcon></InstaIcon>
                </div>
                <div className='socialInfo-iconsFooter'>
                    <FacebookIcon></FacebookIcon>
                </div>
            </div>
        </div>
    )
}
export { SocialInfo };