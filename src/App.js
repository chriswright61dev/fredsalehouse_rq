import "./App.css";
import "./AppColours.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Drinks from "./pages/Drinks";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";

import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/drinks" element={<Drinks />}></Route>

          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/:event_id" element={<Event />}></Route>

          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/jobs/:job_id" element={<Job />}></Route>
        </Routes>
      </Router>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
