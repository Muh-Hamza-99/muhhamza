import { Route, Routes } from "react-router-dom";
// import BlogIndex from "./pages/BlogIndex";
// import BlogLayout from "./pages/BlogLayout";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<BlogPost />} />
    </Routes>
  );
};

export default App;
