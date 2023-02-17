import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  Hedaer,
  Footer,
  Bookdetail,
  Page404,
} from "./components/pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hedaer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Bookdetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
