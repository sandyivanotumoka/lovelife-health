// Halaman UserInfoPage
// Halaman ini meminta user memilih jenis kelamin dan memasukkan umur
// sebelum melanjutkan ke proses memilih gejala

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "../components/layout/AppContainer";

function UserInfoPage() {
  const navigate = useNavigate();

  // state untuk menyimpan jenis kelamin user
  const [gender, setGender] = useState<string>("");

  // state untuk menyimpan umur user
  const [age, setAge] = useState<string>("");

  return (
    <AppContainer>
      <div className="px-6 py-10 space-y-8">
        {/* Tombol kembali ke halaman Home */}
        <button
          onClick={() => navigate("/")}
          className="text-sm text-[var(--color-primary)] mb-4"
        >
          ← Kembali
        </button>
        {/* Judul halaman */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--color-primary)]">
            Informasi Pengguna
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Data ini membantu memberikan hasil yang lebih relevan.
          </p>
        </div>
        {/* Pilihan jenis kelamin */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Jenis Kelamin</p>

          <div className="flex gap-3">
            {/* tombol laki-laki */}
            <button
              onClick={() => setGender("Laki-laki")}
              className={`flex-1 py-3 rounded-xl border text-sm font-medium transition
              ${
                gender === "Laki-laki"
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-gray-700"
              }`}
            >
              Laki-laki
            </button>

            {/* tombol perempuan */}
            <button
              onClick={() => setGender("Perempuan")}
              className={`flex-1 py-3 rounded-xl border text-sm font-medium transition
              ${
                gender === "Perempuan"
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-gray-700"
              }`}
            >
              Perempuan
            </button>
          </div>
        </div>
        {/* Input umur */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Umur</p>

          <input
            type="number"
            placeholder="Masukkan umur"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>
        {/* Tombol lanjut */}
        <button
          // tombol tidak aktif jika gender atau umur belum diisi
          disabled={!gender || !age}
          onClick={() => {
            // simpan data user ke localStorage
            localStorage.setItem("userGender", gender);
            localStorage.setItem("userAge", age);

            // lanjut ke halaman pilih bagian tubuh
            navigate("/body");
          }}
          className={`w-full py-3 rounded-xl text-white font-medium transition
          ${
            !gender || !age
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
          }`}
        >
          Lanjut
        </button>
      </div>
    </AppContainer>
  );
}

export default UserInfoPage;
