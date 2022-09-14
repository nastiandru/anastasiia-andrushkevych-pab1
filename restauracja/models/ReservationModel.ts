import Table from './TableModel';

class Reservation
{
    table: Table;
    startDateTime: Date;
    endDateTime: Date;
    customer: string;

    constructor(table: Table, startDateTime: Date, endDateTime: Date, customer: string)
    {
        this.table = table;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.customer = customer;
    }
}

export default Reservation;