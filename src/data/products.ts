export type ProductType = {name: string, price: number, discount?: number, mainImage: string}

export const tablica: ProductType[] = [
    {
        name: 'Komoda',
        price: 6000,
        mainImage: '/komoda1.jpg'
    },
    {
        name: 'Krzesło',
        price: 1000,
        mainImage: '/krzesło1.jpg'
    },
    {
        name: 'Stół',
        price: 8000,
        mainImage: '/stół1.jpg'
    },
    {
        name: 'Taboret',
        price: 1500,
        mainImage: '/taboret1.jpg'
    },
    {
        name: 'Stolik',
        price: 2500,
        mainImage: '/stolik1.jpg'
    },
    {
        name: 'RTV',
        price: 4900,
        discount: 2000,
        mainImage: '/rtv1.jpg'
    },
    {
        name: 'Sofa',
        price: 6500,
        mainImage: '/sofa1.jpg'
    },
    {
        name: 'Regał',
        price: 2000,
        discount: 1499,
        mainImage: '/regał1.jpg'
    }
]