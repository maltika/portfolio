import { BrowserRouter, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
