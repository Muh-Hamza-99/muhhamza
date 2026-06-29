import { Route, Routes } from "react-router-dom";
import Root from "./pages/root";
import UWaterloo from "./pages/uwaterloo";
import WC26 from "./pages/wc26";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/uwaterloo" element={<UWaterloo /> } />
      <Route path="/wc26" element={<WC26 />} />
    </Routes>
  );
};

export default App;
