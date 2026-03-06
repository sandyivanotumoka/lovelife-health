// Halaman Symptoms
// Halaman ini menampilkan daftar gejala berdasarkan bagian tubuh yang dipilih user

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppContainer from "../components/layout/AppContainer";
import { symptomsData } from "../data/symptoms";
import Swal from "sweetalert2";

function SymptomsPage() {
  // mengambil parameter bodyPart dari URL
  const { bodyPart } = useParams<{ bodyPart: string }>();

  const navigate = useNavigate();

  // mengambil daftar gejala berdasarkan bagian tubuh
  const symptoms = symptomsData[bodyPart ?? ""] || [];

  // menyimpan gejala yang dipilih user
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // fungsi memilih atau menghapus gejala
  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      // jika sudah dipilih → hapus
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      // jika belum dipilih → tambahkan
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <AppContainer>
      <div className="min-h-screen px-6 py-10">
        {/* Tombol kembali ke halaman sebelumnya */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-[var(--color-primary)] mb-2"
        >
          ← Kembali
        </button>

        {/* Judul halaman */}
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
          Pilih Gejala
        </h2>

        {/* Daftar gejala */}
        <div className="grid gap-3 md:grid-cols-2">
          {symptoms.map((symptom) => {
            const isSelected = selectedSymptoms.includes(symptom);

            return (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`w-full p-3 rounded-lg text-left text-sm transition
                ${
                  isSelected
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white shadow hover:shadow-md"
                }`}
              >
                {symptom}
              </button>
            );
          })}
        </div>

        {/* Pesan jika user belum memilih gejala */}
        {selectedSymptoms.length === 0 && (
          <p className="text-sm text-red-500 mt-4">
            Silakan pilih minimal satu gejala sebelum analisis.
          </p>
        )}

        {/* Tombol untuk memulai proses analisis gejala */}
        <button
          disabled={selectedSymptoms.length === 0}
          onClick={() => {
            // Menampilkan popup loading diagnosis
            Swal.fire({
              title: "Menganalisis Gejala...",
              text: "Mohon tunggu sebentar",
              allowOutsideClick: false,
              showConfirmButton: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });

            // Menyimpan gejala yang dipilih ke localStorage
            localStorage.setItem(
              "selectedSymptoms",
              JSON.stringify(selectedSymptoms),
            );

            // Simulasi proses analisis selama 1.5 detik
            setTimeout(() => {
              // menutup loading
              Swal.close();

              // pindah ke halaman result
              navigate("/result", {
                state: { symptoms: selectedSymptoms },
              });
            }, 1500);
          }}
          className={`w-full mt-6 py-3 rounded-xl text-white font-medium
  ${
    selectedSymptoms.length === 0
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
  }`}
        >
          Analisis Gejala
        </button>
      </div>
    </AppContainer>
  );
}

export default SymptomsPage;
