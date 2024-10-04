import axios from "axios";

const API_URL = "https://pixabay.com/api/";
const API_KEY = "46325431-f20d64af00b44901a3d7fa9a6";

export const getImages = async (text,number) => {
    try{
      return await axios.get(`${API_URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${number}&safe_search=true`);
    }
    catch(error){
        console.log("The Error Message is shown as following : ",error.message);
    }
}