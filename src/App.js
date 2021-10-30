import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import BookHotel from "./pages/BookHotel";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Home/>
        <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <PrivateRoute exact path="/book-hotel">
          <BookHotel/>
        </PrivateRoute>
        </Switch>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
