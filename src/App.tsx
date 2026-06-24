import { Route, Routes } from "react-router-dom";
import Root from "./pages/root";
import UWaterloo from "./pages/uwaterloo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/uwaterloo" element={<UWaterloo /> } />
    </Routes>
  );
};

export default App;
