import axios from "axios";
import Category from "../models/Category";

class CategoriesController {
    //CRUD
    //?access_token=${}
    async create(category) {
        axios.defaults.baseURL = "http://tasks-api.mr-dev.tech"
        axios.defaults.withCredentials = true;
        try {
            let response= await axios.post(`/categories`,
            {
                name:category.name,
                active:true
            },
            );
            console.log(response.data);
            if(response.status == 200){
                return response.data.name;
            }
        } catch (error) {
            //Error 4xx - 5xx
            console.log(error)
            return null;
        }
    }

    async read() {
        axios.defaults.baseURL = "http://tasks-api.mr-dev.tech"
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.get(`/categories`);
            console.log(response.data);
            if(response.data.length != 0){
                let categories = [];
                // for(let key in response.data){
                //     let category = new Category();
                //     category.id = key;
                //     category.name = response.data[key].name
                //     categories.push(category);
                // }
                // console.log(categories)
                return categories;
            }
            return [];
        } catch (error) {
            //ERROR
            return [];
        }
    }

    async update(category) {
        axios.defaults.baseURL = "http://tasks-api.mr-dev.tech"
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.put(`/categories/${id}`,
            {
                name:category.name,
                active:true,
            }
            );
            return true;
        } catch (error) {
            //ERROR
            return false;
        }
    }

    async delete(id) {
        axios.defaults.baseURL = "http://tasks-api.mr-dev.tech"
        axios.defaults.withCredentials = true;
        try {
            let response = await axios.delete(
                `/categories/${id}`
            );
            return true;
        } catch (error) {
            //ERROR
            return false;
        }
    }
}
export default CategoriesController;