const calculateAllocation = (salary) => {
  const amount = Number(salary);
    if (!amount || amount <= 0) {
      throw new Error("Jumlah gaji harus lebih dari 0");
    }
    const percentage = {
      kebutuhanPokok: 50,
      kebutuhanSekunder: 30,
      tabungan: 20,
    };
    const kebutuhanPokok = Math.round(amount * 0.5);
    const kebutuhanSekunder = Math.round(amount * 0.3);
    const tabungan = Math.round(amount * 0.2);
    return {
      salary: amount,
      kebutuhanPokok,
      kebutuhanSekunder,
      tabungan,
      percentage,
      insight:
        "Alokasi dibuat berdasarkan hasil olahan Data Science dari monthly_features.",
      };
    };

module.exports = calculateAllocation;