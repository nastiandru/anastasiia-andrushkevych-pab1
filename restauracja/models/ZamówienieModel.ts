import Pracownik from "./PracownikModel";
import Stolik from "./StolikModel";
import Danie from "./DanieModel"

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
    pozycje: Danie[];
    status: ZamowienieStatus;
    stolik: Stolik;
    kwota: number;

    constructor(pracownik: Pracownik, pozycje: Danie[], status: ZamowienieStatus, stolik: Stolik, kwota: number)
    {
        this.pracownik = pracownik;
        this.pozycje = pozycje;
        this.status = status;
        this.stolik = stolik;
        this.kwota = kwota;
    }
}


export default Zamowienie;