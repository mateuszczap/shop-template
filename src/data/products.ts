export type ProductType = {name: string, price: number, discount?: number, mainImage: string, secondImage:string, thirdImage:string}

export const tablica: ProductType[] = [
    {
        name: 'Komoda',
        price: 6000,
        mainImage: '/komoda1.jpg',
        secondImage: '/komoda2.jpg',
        thirdImage: '/komoda3.jpg',
    },
    {
        name: 'Krzesło',
        price: 1000,
        mainImage: '/krzesło1.jpg',
        secondImage: '/krzesło2.jpg',
        thirdImage: '/krzesło3.jpg',
    },
    {
        name: 'Stół',
        price: 8000,
        mainImage: '/stół1.jpg',
        secondImage: '/stół2.jpg',
        thirdImage: '/stół3.jpg',
    },
    {
        name: 'Taboret',
        price: 1500,
        mainImage: '/taboret1.jpg',
        secondImage: '/taboret2.jpg',
        thirdImage: '/taboret3.jpg',
    },
    {
        name: 'Stolik',
        price: 2500,
        mainImage: '/stolik1.jpg',
        secondImage: '/stolik2.jpg',
        thirdImage: '/',
    },
    {
        name: 'RTV',
        price: 4900,
        discount: 2000,
        mainImage: '/rtv1.jpg',
        secondImage: '/rtv2.jpg',
        thirdImage: '/',
    },
    {
        name: 'Sofa',
        price: 6500,
        mainImage: '/sofa1.jpg',
        secondImage: '/sofa2.jpg',
        thirdImage: '/sofa3.jpg',
    },
    {
        name: 'Regał',
        price: 2000,
        discount: 1499,
        mainImage: '/regał1.jpg',
        secondImage: '/regał2.jpg',
        thirdImage: '/regał3.jpg',
    }
]