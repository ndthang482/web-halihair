import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/product";
class ProductService {

    getProducts(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(EMPLOYEE_API_BASE_URL, product);
    }

    getProductById(productId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + productId);
    }

    updateProduct(product, productId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + productId);
    }
}
export default new ProductService()