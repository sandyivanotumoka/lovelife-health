// Halaman Result Diagnosis
// Halaman ini menampilkan kemungkinan penyakit berdasarkan gejala yang dipilih user

import { useLocation } from "react-router-dom";
import AppContainer from "../components/layout/AppContainer";
import { diagnose } from "../utils/diagnose";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

function ResultPage() {
  // Mengambil data gejala yang dikirim dari halaman sebelumnya
  const location = useLocation();
  const navigate = useNavigate();

  // Mengecek apakah halaman dibuka tanpa data gejala
  // biasanya terjadi jika user refresh halaman result
  useEffect(() => {
    if (!location.state?.symptoms) {
      // menampilkan alert menggunakan SweetAlert
      Swal.fire({
        icon: "warning",
        title: "Halaman Tidak Valid",
        text: "Anda akan kembali ke halaman utama.",
        confirmButtonColor: "#6366f1",
        confirmButtonText: "Kembali",
      }).then(() => {
        // kembali ke halaman home
        navigate("/");
      });
    }
  }, []);
  // mengambil data dari localStorage
  const storedSymptoms = localStorage.getItem("selectedSymptoms");

  // mengambil informasi user dari localstorage
  const userGender = localStorage.getItem("userGender");
  const userAge = localStorage.getItem("userAge");

  // jika ada state dari navigate pakai itu
  // jika tidak ada (reload) pakai data dari localStorage
  const selectedSymptoms: string[] =
    location.state?.symptoms ||
    (storedSymptoms ? JSON.parse(storedSymptoms) : []);

  // Menjalankan algoritma diagnosis
  const results = diagnose(selectedSymptoms);

  // ambil hanya 3 hasil terbaik
  const topResults = results.slice(0, 3);

  // Mengambil hasil diagnosis tertinggi
  const topResult = topResults[0];

  // Menghitung tingkat confidence dari diagnosis utama
  const confidence = getConfidence(topResult.match);

  // Fungsi untuk menentukan tingkat kepercayaan diagnosis berdasarkan persentase
  function getConfidence(match: number) {
    if (match >= 70) {
      return {
        label: "Tinggi",
        color: "text-green-600",
      };
    }

    if (match >= 40) {
      return {
        label: "Sedang",
        color: "text-yellow-600",
      };
    }

    return {
      label: "Rendah",
      color: "text-red-600",
    };
  }

  // Fungsi menentukan warna progress bar berdasarkan persentase kemungkinan penyakit
  function getRiskColor(match: number) {
    // jika kemungkinan tinggi
    if (match >= 70) {
      return "bg-green-500";
    }

    // jika kemungkinan sedang
    if (match >= 40) {
      return "bg-yellow-500";
    }

    // jika kemungkinan rendah
    return "bg-red-500";
  }

  return (
    <AppContainer>
      <div className="px-6 py-8 grid gap-6 lg:grid-cols-3">
        {/* Header halaman */}
        <div className="mb-6 space-y-1">
          {/* Menampilkan informasi user */}
          <p className="text-sm text-gray-500">
            {userGender} • {userAge} tahun
          </p>

          {/* Judul halaman */}
          <h2 className="text-xl font-semibold text-[var(--color-primary)]">
            Kemungkinan Penyakit
          </h2>
        </div>

        {/* Card diagnosis utama */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[var(--color-primary)] text-white shadow-lg space-y-4">
          <p className="text-sm opacity-80">Diagnosis Paling Mungkin</p>

          <h3 className="text-lg font-semibold">{topResult.name}</h3>

          {/* Menampilkan persentase kemungkinan penyakit */}
          <p className="text-sm">Kemungkinan: {topResult.match}%</p>

          {/* Menampilkan tingkat confidence diagnosis */}
          <p className={`text-sm font-medium ${confidence.color}`}>
            Confidence: {confidence.label}
          </p>

          {/* Progress bar */}
          <div className="w-full bg-white/30 rounded-full h-3">
            {/* Progress bar diagnosis utama */}
            <div
              className={`h-3 rounded-full ${getRiskColor(topResult.match)}`}
              style={{ width: `${topResult.match}%` }}
            />
          </div>

          {/* Saran tindakan */}
          {topResult.advice && topResult.advice.length > 0 && (
            <div className="space-y-2 pt-2">
              <p className="text-sm font-medium">Saran:</p>

              <ul className="text-sm list-disc pl-5">
                {topResult.advice.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <hr className="border-gray-200" />

        {/* List hasil diagnosis lain */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          <h3 className="text-sm font-semibold text-gray-500">
            Kemungkinan Lain
          </h3>
          {topResults.slice(1).map((result) => (
            <div
              key={result.name}
              className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm space-y-3"
            >
              {/* Nama penyakit */}
              <div className="flex justify-between items-center">
                <span className="font-semibold">{result.name}</span>

                <span className="text-sm text-gray-500">
                  {result.match < 30
                    ? "Kemungkinan sangat rendah"
                    : `${result.match}%`}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                {/* Progress bar kemungkinan penyakit lain */}
                <div
                  className={`h-2.5 rounded-full ${getRiskColor(result.match)}`}
                  style={{
                    width: `${result.match < 30 ? 8 : result.match}%`,
                  }}
                />
              </div>

              {/* Saran tindakan */}
              {result.advice && result.advice.length > 0 && (
                <ul className="text-sm text-gray-600 list-disc pl-5">
                  {result.advice.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer medis */}
      <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-sm text-yellow-800">
        ⚠️ Informasi ini hanya untuk tujuan edukasi dan bukan pengganti
        diagnosis dokter. Jika gejala berlanjut atau memburuk, segera
        konsultasikan dengan tenaga medis.
      </div>
      {/* Action buttons */}
      <div className="sticky bottom-0 bg-white px-6 py-4 flex gap-3 border-t">
        {/* Tombol ubah gejala */}
        <button
          onClick={() => navigate("/symptoms/head")}
          className="flex-1 py-3 rounded-xl border border-gray-300 text-sm text-gray-600"
        >
          Ubah Gejala
        </button>

        {/* Tombol mulai ulang */}
        <button
          onClick={() => {
            localStorage.removeItem("selectedSymptoms");
            navigate("/");
          }}
          className="flex-1 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm"
        >
          Periksa Lagi
        </button>
      </div>
    </AppContainer>
  );
}

export default ResultPage;
