import Allocation from "../models/allocationModel.js";

export const getDashboard = async (req, res) => {
  try {
    const latestAllocation =
      await Allocation.findOne({
        user: req.user._id
      })
      .sort({ createdAt: -1 });

    if (!latestAllocation) {
      return res.status(404).json({
        message: "Belum ada data"
      });
    }

    res.status(200).json({
      success: true,
      data: latestAllocation
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
      await Allocation.findOne({
        user: req.user._id
      })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: allocation,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};