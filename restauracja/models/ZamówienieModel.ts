import Pracownik from "./PracownikModel";
import PozycjaMenu from "./PozycjaMenuModel";
import Stolik from "./StolikModel";

enum ZamowienieStatus 
{
    Zlozone,
    WRealizacji,
    Zrealizowane,
    Rachunek
}

class Zamowienie
{
    pracownik: Pracownik;
    pozycje: PozycjaMenu[];
    status: ZamowienieStatus;
    stolik: Stolik;
    kwota: number;

    constructor(pracownik: Pracownik, pozycje: PozycjaMenu[], status: ZamowienieStatus, stolik: Stolik, kwota: number)
    {
        this.pracownik = pracownik;
        this.pozycje = pozycje;
        this.status = status;
        this.stolik = stolik;
        this.kwota = kwota;
    }
}


export default Zamowienie;