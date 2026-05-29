import Allocation from "../models/allocationModel.js";

export const calculateAllocation =
async (req, res) => {

  try {

    const {
      amount,
      profile
    } = req.body;

    let kebutuhanPokokRate;
    let sekunderRate;
    let tabunganRate;

    if (profile === "hemat") {

      kebutuhanPokokRate = 0.5;
      sekunderRate = 0.2;
      tabunganRate = 0.3;

    } else if (
      profile === "agresif_menabung"
    ) {

      kebutuhanPokokRate = 0.45;
      sekunderRate = 0.15;
      tabunganRate = 0.4;

    } else {

      kebutuhanPokokRate = 0.45;
      sekunderRate = 0.35;
      tabunganRate = 0.2;

    }

    const kebutuhanPokok =
      amount * kebutuhanPokokRate;

    const sekunder =
      amount * sekunderRate;

    const tabungan =
      amount * tabunganRate;

    const allocation =
      await Allocation.create({

        salary: amount,

        profile,

        kebutuhanPokok,

        sekunder,

        tabungan

      });

    res.status(200).json({

      success: true,

      data: {

        allocation,

        percentages: {

          kebutuhanPokok:
            kebutuhanPokokRate * 100,

          sekunder:
            sekunderRate * 100,

          tabungan:
            tabunganRate * 100

        },

        suggestions: [

          profile === "hemat"
            ? "Fokus mempertahankan tabungan tinggi."
            : profile === "agresif_menabung"
            ? "Kurangi pengeluaran hiburan."
            : "Pertahankan keseimbangan finansial."

        ]

      }

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};