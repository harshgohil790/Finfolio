import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CompanyDetails from "./pages/companyDetails/CompanyDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import Companies from "./pages/companies/Companies";
import Portfolio from "./pages/portfolio/Portfolio";
import Trading from "./pages/trading/Trading";
import Watchlist from "./pages/Watchlist/Watchlist";

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/companies" element={<Companies />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/trading" element={<Trading />} />

        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
      </Route>

    </Routes>
  );
}

export default App;
