// Komponen utama aplikasi LoveLife Health
// Di sini kita mendefinisikan semua halaman aplikasi

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BodySelectPage from "./pages/BodySelectPage";
import SymptomsPage from "./pages/SymptomsPage";
import ResultPage from "./pages/ResultPage";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/userinfo" element={<UserInfoPage />} />

      <Route path="/body" element={<BodySelectPage />} />

      <Route path="/symptoms/:bodyPart" element={<SymptomsPage />} />

      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
