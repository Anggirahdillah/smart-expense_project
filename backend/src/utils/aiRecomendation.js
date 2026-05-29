const generateRecommendation =
(amount, profile)=>{

let suggestions = [];
let persona = profile;

let allocation;

if(profile === "hemat"){

allocation = {
 kebutuhanPokok:50,
 sekunder:20,
 tabungan:30
};

suggestions.push(
 "Fokus mempertahankan tabungan tinggi."
);

}

else if(
profile === "agresif_menabung"
){

allocation = {
 kebutuhanPokok:45,
 sekunder:15,
 tabungan:40
};

suggestions.push(
 "Kurangi pengeluaran hiburan."
);

}

else{

allocation = {
 kebutuhanPokok:45,
 sekunder:35,
 tabungan:20
};

suggestions.push(
 "Pertahankan keseimbangan finansial."
);

}

return{

allocation,
percentages:allocation,
suggestions,
persona

};

};

export default
generateRecommendation;