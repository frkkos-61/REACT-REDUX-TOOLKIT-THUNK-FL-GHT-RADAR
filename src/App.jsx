import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Map from "./pages/Map";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  //* Detayı gösterilecek uçuşın ID'si
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  console.log(detailId);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>

      {/* detailId state'i doluysa ekrana modal bas ve İD propu gönder */}
      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
