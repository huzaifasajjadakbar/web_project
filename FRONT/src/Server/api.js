import axios from 'axios';
const url = "http://localhost:2000";

export const insertData = async (Data) => {
   await axios.post(`${url}/Login`,Data);


}