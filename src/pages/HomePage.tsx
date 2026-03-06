// Halaman Home aplikasi LoveLife Health
// Halaman ini menggunakan animasi ringan agar UI terasa hidup

import { HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import AppContainer from "../components/layout/AppContainer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <AppContainer>
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-6">
          {/* Icon kesehatan dengan animasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
              <HeartPulse size={32} />
            </div>
          </motion.div>

          {/* Judul dengan animasi */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-[var(--color-primary)]"
          >
            LoveLife Health
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-sm leading-relaxed"
          >
            Pahami kondisi tubuh Anda dan deteksi gejala penyakit ringan lebih
            awal.
          </motion.p>

          {/* Tombol mulai */}
          <motion.button
            onClick={() => navigate("/userinfo")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-medium shadow-md"
          >
            Mulai Pemeriksaan
          </motion.button>
        </div>
      </div>
    </AppContainer>
  );
}

export default HomePage;
