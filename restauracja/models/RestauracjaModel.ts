 class RestauracjaModel{

     nazwa: string;
     adres: string;
     telefon: string;
     nip: string;
     email: string;
     www: string;

     constructor(nazwa: string, adres: string, telefon: string, nip: string, email: string, www: string)
     {
        this.nazwa = nazwa;
        this.adres = adres;
        this.telefon = telefon;
        this.nip = nip;
        this.email = email;
        this.www = www;
     }
 }

 export default RestauracjaModel;