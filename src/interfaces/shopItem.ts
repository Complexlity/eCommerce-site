// Creates a blue print of what a shop item object should
export interface ShopItem {
    title: string,
    id: number,
    price: number
    image?: string
    count?: number
    category?: string,
    description?: string,
}

