import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";
export default function App() {
  return (
    <>
      <main>
        <section>
          <Router>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </section>
      </main>
    </>
  );
}
