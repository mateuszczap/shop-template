export type ProductType = {name: string, price: number, discount?: number}

export const tablica: ProductType[] = [
    {
        name: 'Komoda',
        price: 6000,
    },
    {
        name: 'Krzesło',
        price: 1000,
    },
    {
        name: 'Stół',
        price: 8000,
    },
    {
        name: 'Taboret',
        price: 1500,
    },
    {
        name: 'Stolik',
        price: 2500,
    },
    {
        name: 'RTV',
        price: 4900,
        discount: 2000
    },
    {
        name: 'Sofa',
        price: 6500,
    },
    {
        name: 'Drzwi',
        price: 2000,
        discount: 1499
    }
]