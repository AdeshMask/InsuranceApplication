import axios from "axios";

class UserService {
    baseUrl ="http://localhost:8083/claim";

    createClaim(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      } 
      getAllInsurance() {
        return axios.get(`${this.baseUrl}/getall`);
      }

    //   getUserById(userid) {
    //     return axios.get(`${this.baseUrl}/getuser/${userid}`,{params:{token: token}});
    //   }
    //   getUserEmailId(data) {
    //     return axios.get(`${this.baseUrl}/user`, data);
    //   }

    userLogin(data) {
      return axios.post(`${this.baseUrl}/login`,data);
    }

}

export default new UserService();