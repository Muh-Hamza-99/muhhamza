import { Route, Routes } from "react-router-dom";
// import BlogIndex from "./pages/BlogIndex";
// import BlogLayout from "./pages/BlogLayout";
// import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogIndex />} />
        <Route path=":slug" element={<BlogPost />} />
      </Route> */}
    </Routes>
  );
};

export default App;
