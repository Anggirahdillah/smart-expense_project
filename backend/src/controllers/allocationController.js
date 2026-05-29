import Allocation from "../models/allocationModel.js";

export const calculateAllocation =
async(req,res)=>{

  try{

    const { salary } = req.body;

    const kebutuhanPokok =
      salary * 0.5;

    const sekunder =
      salary * 0.3;

    const tabungan =
      salary * 0.2;

    const allocation =
      await Allocation.create({

        salary,
        kebutuhanPokok,
        sekunder,
        tabungan

      });

    res.status(200).json({

      success:true,
      data:allocation

    });

  }catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};

export const getAllocations =
async(req,res)=>{

  try{

    const allocations =
      await Allocation.find()
      .sort({ createdAt:-1 });

    res.status(200).json({

      success:true,
      data:allocations

    });

  }catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};