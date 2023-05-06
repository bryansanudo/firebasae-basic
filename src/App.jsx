import GetFiles from "@/components/GetFiles";
import PostFiles from "@/components/PostFiles";
import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "@/components/DetailsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/get-files" element={<GetFiles />} />
          <Route path="/post-files" element={<PostFiles />} />
          <Route path="/file/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
