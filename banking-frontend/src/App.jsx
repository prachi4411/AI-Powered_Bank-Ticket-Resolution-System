import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/AdminDashboard";
import CreateTicket from "./pages/CreateTicket";
import TicketList from "./pages/AdminTickets";
import TicketDetails from "./pages/TicketDetails";
import AuthPage from "./pages/AuthPage";
import UserDashboard from "./pages/UserDashboard";
import TransactionPage from "./pages/TransactionPage";
import TransactionHistory from "./pages/TransactionHistory";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTransactions from "./pages/AdminTransactions";
import AdminTickets from "./pages/AdminTickets";

import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route
  path="/user/dashboard"
  element={
    <PrivateRoute requiredRole="ROLE_USER">
      <UserDashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/user/transaction"
  element={
    <PrivateRoute requiredRole="ROLE_USER">
      <TransactionPage />
    </PrivateRoute>
  }
/>

<Route
  path="/user/history"
  element={
    <PrivateRoute requiredRole="ROLE_USER">
      <TransactionHistory />
    </PrivateRoute>
  }
/>

<Route
  path="/admin/dashboard"
  element={
    <PrivateRoute requiredRole="ROLE_ADMIN">
      <AdminDashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/admin/transactions"
  element={
    <PrivateRoute requiredRole="ROLE_ADMIN">
      <AdminTransactions />
    </PrivateRoute>
  }
/>

<Route
  path="/admin/tickets"
  element={
    <PrivateRoute requiredRole="ROLE_ADMIN">
      <AdminTickets />
    </PrivateRoute>
  }
/>
        <Route
          path="/create-ticket"
          element={
            <PrivateRoute>
              <CreateTicket />
            </PrivateRoute>
          }
        />

        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketList />
            </PrivateRoute>
          }
        />

        <Route
          path="/tickets/:id"
          element={
            <PrivateRoute>
              <TicketDetails />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;