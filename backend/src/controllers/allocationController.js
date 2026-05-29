import Allocation from "../models/allocationModel.js";
import getAIRecommendation from "../services/aiService.js";

export const calculateAllocation = async (req, res) => {

  try {

    const { salary } = req.body;

    const aiResult =
      await getAIRecommendation({
        income: salary
      });

    console.log("AI RESULT:", aiResult);

    const kebutuhanPokok =
      salary * aiResult.needs_rate;

    const sekunder =
      salary * aiResult.wants_rate;

    const tabungan =
      salary * aiResult.saving_rate;

    const allocation =
      await Allocation.create({

        salary,
        kebutuhanPokok,
        sekunder,
        tabungan

      });

    res.status(200).json({

      success: true,
      data: allocation

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      message: error.message

    });

  }

};

export const getAllocations = async (req, res) => {

  try {

    const allocations =
      await Allocation.find()
      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,
      data: allocations

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

export const getLatestAllocation =
async (req, res) => {

  try {

    const allocation =
      await Allocation.findOne()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: allocation
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};