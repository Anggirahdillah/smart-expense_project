import axios from "axios";

const getAIRecommendation = async (data) => {

  const response = await axios.post(
    process.env.AI_SERVICE_URL,
    {
      income: data.salary
    }
  );

  return response.data;
};

export default getAIRecommendation;