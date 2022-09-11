import Klient from './KlientModel';
import Stolik from './StolikModel';

class Rezerwacja
{
    stolik: Stolik;
    startRezerwacji: Date;
    koniecRezerwacji: Date;
    klient: Klient;

    constructor(stolik: Stolik, startRezerwacji: Date, koniecRezerwacji: Date,  klient: Klient)
    {
        this.stolik = stolik;
        this.startRezerwacji = startRezerwacji;
        this.koniecRezerwacji = koniecRezerwacji;
        this. klient =  klient;
    }
}

export default Rezerwacja;