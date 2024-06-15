import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { Suspense, lazy } from "react";
import Hero from "./components/Hero";
const Nopage = lazy(() => import("./components/Nopage"));
function App() {
  return (
    <div className="w-full  font-medextra bg-LightGrayishCyan">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div className="w-full text-center font-medextra font-mono text-black text-xl">
                    {" "}
                    Loading...
                  </div>
                }
              >
                <Nopage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
