import "./App.css";
import "./AppColours.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
