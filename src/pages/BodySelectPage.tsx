// Halaman untuk memilih bagian tubuh
// User akan memilih bagian tubuh sebelum melihat daftar gejala

import AppContainer from "../components/layout/AppContainer";
import { bodyParts } from "../data/bodyParts";
import { useNavigate } from "react-router-dom";

function BodySelectPage() {
  const navigate = useNavigate();
  return (
    <AppContainer>
      <div className="min-h-screen px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-[var(--color-primary)] mb-2"
        >
          ← Kembali
        </button>
        {/* Judul halaman */}
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
          Pilih Bagian Tubuh
        </h2>
        {/* Grid bagian tubuh */}
        <div className="grid grid-cols-2 gap-4">
          {bodyParts.map((part) => {
            const Icon = part.icon;

            return (
              <button
                key={part.id}
                onClick={() => navigate(`/symptoms/${part.id}`)}
                className="p-4 rounded-xl bg-white shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition"
              >
                {/* Icon bagian tubuh */}
                <Icon size={28} className="text-[var(--color-primary)]" />

                {/* Nama bagian tubuh */}
                <span className="text-sm font-medium">{part.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </AppContainer>
  );
}

export default BodySelectPage;
