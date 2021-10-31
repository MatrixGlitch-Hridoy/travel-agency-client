import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import AddHotel from "./pages/AddHotel";
import BookHotel from "./pages/BookHotel";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageAllBookings from "./pages/ManageAllBookings";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/book-hotel/:id">
            <BookHotel />
          </PrivateRoute>
          <PrivateRoute exact path="/my-bookings">
            <MyBookings />
          </PrivateRoute>
          <PrivateRoute exact path="/manage-bookings">
            <ManageAllBookings />
          </PrivateRoute>
          <PrivateRoute exact path="/add-hotel">
            <AddHotel />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
