import Produkt from './ProduktModel';

enum Type
{
    Starter,
    MainDish,
    SideDish,
    Drink,
    Dessert
}

enum JednostkaMiary
{
    kawalek,
    g,
    ml,
    kg,
    l
}

class PozycjaMenu
{
    nazwa: string;
    cena: number;
    type: Type;
    opis: string;
    produkty: Produkt[];

    constructor(nazwa: string, cena: number, type: Type, opis: string, produkty: Produkt[])
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.type = type;
        this.opis = opis;
        this.produkty = produkty;
    }
}

export default PozycjaMenu;