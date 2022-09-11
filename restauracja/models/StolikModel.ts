class Stolik
{
    numer: number;
    iloscOsob: number;
    status: StatusStolika;

    constructor(numer: number, iloscOsob: number, status: StatusStolika)
    {
        this.numer = numer;
        this.iloscOsob = iloscOsob;
        this.status = status;
    }
}

enum StatusStolika{
    Wolny,
    Zajety,
    Dirty,
    Niedostępny
}

export default Stolik;