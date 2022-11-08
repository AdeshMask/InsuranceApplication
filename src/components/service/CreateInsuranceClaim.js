import axios from "axios";

const userID = localStorage.getItem('UserId')
const id = JSON.parse(userID);
console.log(id)
class UserService {
    baseUrl = "http://localhost:8083/claim";

    createClaim(data) {
        return axios.post(`${this.baseUrl}/create`, data);
    }
    getUserById() {
        return axios.get(`${this.baseUrl}/getById/${id}`);
    }

    userLogin(data) {
        return axios.post(`${this.baseUrl}/login`, data);
    }

}

export default new UserService();