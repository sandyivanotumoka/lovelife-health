import { diseases } from "../data/diseases";

export function getAllSymptoms() {
  const allSymptoms = diseases.flatMap((d) => d.symptoms);

  const uniqueSymptoms = [...new Set(allSymptoms)];

  return uniqueSymptoms.sort();
}
