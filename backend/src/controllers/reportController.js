import Report from "../models/reportModel.js";

export const createReport = async (req, res) => {
  try {
    const { month, income } = req.body;
    const report =
      await Report.findOneAndUpdate(
        { month },
        {
          month,
          income
        },
        {
          new: true,
          upsert: true
        }
      );

    res.status(201).json({
      success: true,
      data: report
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getReports = async (req, res) => {

  try {
    const reports =
      await Report.find();
    res.status(200).json({
      success: true,
      data: reports
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};