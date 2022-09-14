import Produkt from './ProduktModel';

enum Type
{
    Starter,
    MainDish,
    SideDish,
    Drink,
    Dessert
}

class Danie
{
    nazwa: string;
    cena: number;
    type: Type;
    opis: string;
    products: Produkt[];

    constructor(name: string, price: number, type: Type, description: string, products: Produkt[])
    {
        this.nazwa = name;
        this.cena = price;
        this.type = type;
        this.opis = description;
        this.products = products;
    }
}

export default Danie;