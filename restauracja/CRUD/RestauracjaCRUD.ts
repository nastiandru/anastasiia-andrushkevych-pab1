import {Schema, model, connect} from 'mongoose';
import Restaurant from '../models/RestauracjaModel';

export class RestaurantRepository
{
    restaurantSchema = new Schema<Restaurant>(
        {
            nazwa: {type: String, required: true},
            adres: {type: String, required: true},
            telefon: {type: String, required: true},
            nip: {type: String, required: true},
            email: {type: String, required: true},
            www: {type: String, required: true},
           
        });

    RestaurantModel = model<Restaurant>('Restaurant', this.restaurantSchema);
    async populateRestaurants() : Promise<void>
    {
        await connect('mongodb+srv://nastia123:<password>@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        const restaurants = [
            {
                nazwa: 'Restaurant1',
                adres: 'Address1',
                telefon: '123456789',
                nip: '123456789',
                email: 'someEmail@something.com',
                www: 'someWebsite.com'
            },
            {
                nazwa: 'Restaurant2',
                adres: 'Address2',
                telefon: '987654321',
                nip: '987654321',
                email: 'someEmail@somethingElse.com',
                www: 'someOtherWebsite.com'
            }];
        await this.RestaurantModel
        .insertMany(restaurants)
        .then(function()
        {
            console.log("Restaurants have been populated!")
        }).catch(function(err)
        {
            console.log(err);
        });
    }
    async addRestaurant(restaurant: Restaurant) : Promise<void>
    {
        await connect('mongodb+srv://nastia123:<password>@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        await this.RestaurantModel
        .create(restaurant)
        .then(function()
        {
            console.log("Restaurant has been added!")
        });
    }
    async deleteRestaurantByName(restaurantName: string) : Promise<void>
    {
        await connect('mongodb+srv://nastia123:<password>@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        await this.RestaurantModel
        .deleteOne({name: restaurantName})
        .then(function()
        {
            console.log("Restaurant has been deleted!")
        });
    }

    async getRestaurantByName(restaurantName: string) : Promise<Restaurant>
    {
        await connect('mongodb+srv://nastia123:<password>@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');
        let restaurant = await this.RestaurantModel.findOne({name: restaurantName});
        if (restaurant)
        {
            return restaurant;
        }
        else
        {
            return null as any;
        }
    }

    async getRestaurants() : Promise<Restaurant[]>
    {
        await connect('mongodb+srv://nastia123:<password>@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');
        return await this.RestaurantModel.find({});
    }

}
