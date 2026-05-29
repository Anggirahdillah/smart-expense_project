import getAIRecommendation
from "../services/aiService.js";

export const getRecommendation =
async(req,res)=>{

try{

const result =
await getAIRecommendation(
 req.body
);

res.json({

 success:true,
 data:result

});

}catch(error){

res.status(500).json({

 message:error.message

});

}

};