class PracownikModel
{
    imie: string;
    nazwisko: string;
    stanowisko: string

    constructor(name: string, surname: string, stanowisko: string)
    {
        this.imie = name;
        this.nazwisko = surname;
        this.stanowisko = stanowisko;
    }
}
export default PracownikModel;