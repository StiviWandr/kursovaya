import axios from "axios";

export default axios.create({
    baseURL: 'https://full-database-eab9f-default-rtdb.europe-west1.firebasedatabase.app/'
})
