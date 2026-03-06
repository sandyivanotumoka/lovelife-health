// Fungsi untuk menghitung kemungkinan penyakit berdasarkan gejala yang dipilih

import { diseases } from "../data/diseases";

export function diagnose(selectedSymptoms: string[]) {
  const results = diseases.map((disease) => {
    // menghitung jumlah gejala yang cocok
    const matchedSymptoms = disease.symptoms.filter((symptom) =>
      selectedSymptoms.includes(symptom),
    );

    const matchCount = matchedSymptoms.length;

    // menghitung persentase kecocokan
    const matchPercentage = Math.round(
      (matchCount / disease.symptoms.length) * 100,
    );

    return {
      name: disease.name,
      match: matchPercentage,
      advice: disease.advice,
    };
  });

  // urutkan hasil dari yang paling cocok
  results.sort((a, b) => b.match - a.match);

  return results;
}
