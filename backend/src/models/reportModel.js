import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true
    },

    income: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Report = mongoose.model(
  "Report",
  reportSchema
);

export default Report;