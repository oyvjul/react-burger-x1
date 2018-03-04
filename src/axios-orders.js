import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-4ee5c.firebaseio.com/"
});

export default instance;