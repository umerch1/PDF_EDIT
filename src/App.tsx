import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Customers = lazy(() => import("./Pages/Customers"));
const Products = lazy(() => import("./Pages/Products"));
const Transaction = lazy(() => import("./Pages/Transaction"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Home = lazy(() => import("./Pages/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* Auth */}
        <Route path="/admin/auth/login" element={<Login />} />
        {/* Dashboard */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/customer" element={<Customers />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        {/* Charts */}
      </Routes>
      </Suspense>
    </Router>
  
  );
};
export default App;
