import axios from "axios";

export const predictAllocation =
async(data)=>{

 const response =
 await axios.post(
   process.env.AI_SERVICE_URL,
   data
 );

 return response.data;
};