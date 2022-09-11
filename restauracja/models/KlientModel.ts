class Klient
{
    imie: string;
    email: string;
    telefon: string;
    adres: string;

    constructor(imie: string, email: string, telefon: string, adres: string)
    {
        this.imie = imie;
        this.email = email;
        this.telefon = telefon;
        this.adres = adres;
    }

}

export default Klient;