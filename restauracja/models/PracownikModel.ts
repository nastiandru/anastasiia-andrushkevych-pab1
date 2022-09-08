class PracownikModel
{
    imie: string;
    nazwisko: string;
    stanowisko: string

    constructor(name: string, surname: string, position: string)
    {
        this.imie = name;
        this.nazwisko = surname;
        this.stanowisko = position;
    }
}
export default PracownikModel;