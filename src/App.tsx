import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const NewProduct = lazy(()=>import("./pages/management/NewProduct"));
const ProductManagement = lazy(()=>import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(()=>import("./pages/management/TransactionManagement"));
const BarCharts = lazy(()=>import("./pages/charts/BarCharts"));
const LineCharts = lazy(()=>import("./pages/charts/LineCharts"));
const PieCharts = lazy(()=>import("./pages/charts/PieCharts"));
const Stopwatch = lazy(()=>import('./pages/apps/Stopwatch'));
const Coupon = lazy(()=>import('./pages/apps/Coupon'));
const Toss = lazy(()=>import('./pages/apps/Toss'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Link to='/admin/dashboard'>
              <button style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '15px 30px',
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  color: '#fff',
                  backgroundColor: '#121212',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  outline: 'none',
                  overflow: 'hidden',
                  zIndex: 1,
                  animation: 'button-pulse 2s infinite',
                  transition: 'background-color 0.3s ease-out',
              }}>Visit Dashboard</button>
          </Link>} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customer" element={<Customers />} />


          <Route path="/admin/chart/bar" element={<BarCharts/>} />
          <Route path="/admin/chart/pie" element={<PieCharts/>} />
          <Route path="/admin/chart/line" element={<LineCharts/>} />

          <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
          <Route path="/admin/app/toss" element={<Toss/>} />
          <Route path="/admin/app/coupon" element={<Coupon/>} />
          
          <Route path="/admin/product/new" element={<NewProduct/>}/>
          <Route path="/admin/product/:id" element={<ProductManagement/>}/>
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>

        </Routes>
      </Suspense>
    </Router>
  );
};





export default App;
