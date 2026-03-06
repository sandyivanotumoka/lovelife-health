// Data bagian tubuh untuk sistem diagnosa
// Kita menambahkan icon agar UI lebih visual

import {
  Brain,
  Eye,
  Wind,
  HeartPulse,
  Utensils,
  Armchair,
  Footprints,
} from "lucide-react";

export const bodyParts = [
  {
    id: "head",
    name: "Kepala",
    icon: Brain,
  },
  {
    id: "eyes",
    name: "Mata",
    icon: Eye,
  },
  {
    id: "nose",
    name: "Hidung",
    icon: Wind,
  },
  {
    id: "throat",
    name: "Tenggorokan",
    icon: Wind,
  },
  {
    id: "chest",
    name: "Dada",
    icon: HeartPulse,
  },
  {
    id: "stomach",
    name: "Perut",
    icon: Utensils,
  },
  {
    id: "arms",
    name: "Tangan",
    icon: Armchair,
  },
  {
    id: "legs",
    name: "Kaki",
    icon: Footprints,
  },
];
