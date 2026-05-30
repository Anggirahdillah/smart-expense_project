import mongoose from "mongoose";

const allocationSchema = new mongoose.Schema(
  {

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    salary: {
      type: Number,
      required: true,
    },

    kebutuhanPokok: {
      type: Number,
    },

    sekunder: {
      type: Number,
    },

    tabungan: {
      type: Number,
    },

  },
  {
    timestamps: true,
  }
);

const Allocation = mongoose.model(
  "Allocation",
  allocationSchema
);

export default Allocation;