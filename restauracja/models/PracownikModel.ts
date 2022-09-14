import Restaurant from "./RestauracjaModel"

class Pracownik
{
    imie: string;
    nazwisko: string;
    stanowisko: string;
    restauracja: Restaurant;
    

    constructor(imie: string, nazwisko: string, stanowisko: string, restauracja: Restaurant)
    {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.stanowisko = stanowisko;
        this.restauracja = restauracja;
    }
}
export default Pracownik;