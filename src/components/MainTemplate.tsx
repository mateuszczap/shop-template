import { Header } from './Header'
import { Footer } from './Footer';
import { ReactNode } from 'react';

function MainTemplate (props:{children:ReactNode[]}) {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export { MainTemplate };