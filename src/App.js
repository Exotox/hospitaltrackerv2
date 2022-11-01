//These are the two pages that are going to be viewable

import Home from "./pages/home/Home";
import Stats from "./pages/stats/Stats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (


    //this is the "link" to the home page and the Statistics page
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
