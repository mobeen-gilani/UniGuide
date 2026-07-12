import Home from "./Home";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import CompareResult from "./pages/CompareResult";
import Ranking from "./pages/Ranking";
import Compare from "./assets/components/Compare";
import RankingList from "./pages/RankingList";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/university/:id" element={<UniversityDetail />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/compare-result" element={<CompareResult />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/rankings/:program" element={<RankingList />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

