import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Blog />} />
    </Routes>
  );
};

export default App;
