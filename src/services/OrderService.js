import axios from "axios";

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders"

class OrderService {
    saveOrder(order){
        return axios.post(ORDER_API_BASE_URL, order);
    }

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    deleteOrder(id){
        return axios.delete(ORDER_API_BASE_URL + "/" + id);
    }

    getOrderById(id) {
        return axios.get(ORDER_API_BASE_URL + "/" + id);
    }

    updateOrder(order, id) {
        return axios.put(ORDER_API_BASE_URL + "/" + id, order);
    }
}

export default new OrderService();