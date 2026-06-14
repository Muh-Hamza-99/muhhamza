import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Root from "./pages/root";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path=":slug" element={<Blog />} />
    </Routes>
  );
};

export default App;
