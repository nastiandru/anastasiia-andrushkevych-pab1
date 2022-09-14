import Employee from "./EmployeeModel";
import Table from "./TableModel";
import Dish from "./DishModel"

enum OrderStatus 
{
    Submitted,
    InProgress,
    Completed,
    BillIssued
}

class Order
{
    employee: Employee;
    items: Dish[];
    status: OrderStatus;
    table: Table;
    price: number;

    constructor(employee: Employee, items: Dish[], status: OrderStatus, table: Table, price: number)
    {
        this.employee = employee;
        this.items = items;
        this.status = status;
        this.table = table;
        this.price = price;
    }
}

export default Order;