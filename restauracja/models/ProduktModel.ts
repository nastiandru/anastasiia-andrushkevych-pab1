enum JednostkaMiary
{
    kawalek,
    g,
    ml,
    kg,
    l
}

class Produkt
{
    nazwa: string;
    cena: number;
    ilosc: number;
    jednostkaMiary: JednostkaMiary;

    constructor(nazwa: string, cena: number, ilosc: number, jednostkaMiary: JednostkaMiary)
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.ilosc = ilosc;
        this.jednostkaMiary = jednostkaMiary;
    }
}