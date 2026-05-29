import axios from "axios";

const getAIRecommendation = async (data) => {

  console.log("AI URL:", process.env.AI_SERVICE_URL);
  console.log("AI PAYLOAD:", data);

  const response = await axios.post(
    process.env.AI_SERVICE_URL,
    data
  );

  console.log("AI RESPONSE:", response.data);

  return response.data;
};

export default getAIRecommendation;