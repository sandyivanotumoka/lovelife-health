// Database gejala berdasarkan bagian tubuh

export const symptomsData: Record<string, string[]> = {
  head: [
    "Sakit kepala",
    "Pusing",
    "Sensitif terhadap cahaya",
    "Tekanan di kepala",
    "Kehilangan keseimbangan",
    "Kelelahan",
    "Sulit berkonsentrasi",
  ],

  eyes: [
    "Penglihatan kabur",
    "Mata merah",
    "Mata kering",
    "Nyeri mata",
    "Sensitif terhadap cahaya",
    "Kelopak mata bengkak",
  ],

  nose: [
    "Pilek",
    "Hidung tersumbat",
    "Bersin",
    "Kehilangan penciuman",
    "Nyeri wajah",
  ],

  throat: [
    "Sakit tenggorokan",
    "Sulit menelan",
    "Suara serak",
    "Tenggorokan kering",
  ],

  chest: ["Batuk", "Sesak napas", "Nyeri dada", "Dada terasa berat"],

  stomach: [
    "Sakit perut",
    "Mual",
    "Muntah",
    "Perut kembung",
    "Nyeri ulu hati",
    "Nafsu makan menurun",
  ],

  body: ["Demam", "Menggigil", "Tubuh lemas", "Nyeri otot", "Kelelahan"],

  arms: ["Nyeri tangan", "Kesemutan di tangan", "Lemah pada tangan"],

  legs: ["Nyeri kaki", "Kram kaki", "Pembengkakan kaki", "Kesemutan di kaki"],
};
