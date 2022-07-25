import "./App.css";
import "./AppColours.css";
import "./animation.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
// pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Drinks from "./pages/Drinks";
import PrideLevBeerPage from "./pages/PrideLevBeerPage";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
// modules
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Navigation from "./modules/Navigation/Navigation";

const queryClient = new QueryClient();
function App() {
  const [headerReady, setHeaderReady] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header setHeaderReady={setHeaderReady} headerReady={headerReady} />
        <Routes>
          <Route path="*" element={<Home headerReady={headerReady} />}></Route>
          <Route path="/" element={<Home headerReady={headerReady} />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/drinks" element={<Drinks />}></Route>
          <Route
            path="/prideoflevenshulme"
            element={<PrideLevBeerPage />}
          ></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/:event_id" element={<Event />}></Route>

          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/jobs/:job_id" element={<Job />}></Route>
        </Routes>

        <Footer headerReady={headerReady} />
        <Navigation />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
