import Product from './ProductModel';

enum Type
{
    Starter,
    MainDish,
    SideDish,
    Drink,
    Dessert
}

class Dish
{
    name: string;
    price: number;
    type: Type;
    products: Product[];

    constructor(name: string, price: number, type: Type, products: Product[])
    {
        this.name = name;
        this.price = price;
        this.type = type;
        this.products = products;
    }
}

export default Dish;