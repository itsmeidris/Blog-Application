/* eslint-disable no-unused-vars */
import axios from 'axios';

const fetchData = async () =>{
    try{
        const response = await axios.get(`http://localhost:1368/blogs`);
        return response.data; //Get the whole data

    }catch(e){
      console.log(e);
      throw e;
    }
}

export default fetchData;