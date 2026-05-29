import axios from "axios";

const getAIRecommendation = async (data) => {

 const response =
 await axios.post(
   process.env.AI_SERVICE_URL,
   data
 );

 return response.data;
};

export default getAIRecommendation;