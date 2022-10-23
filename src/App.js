import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About/About";
import AddNewPack from "./pages/AddNewPack/AddNewPack";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import ManageOrders from "./pages/ManageOrders/ManageOrders/ManageOrders";
import NotFound from "./pages/NotFound/NotFound";
import Packages from "./pages/Packages/Packages/Packages";
import Parchage from "./pages/Parchage/Parchage";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import TourTips from "./pages/TourTips/TourTips";
import UpdatePack from "./pages/UpdatePack/UpdatePack";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/packages">
                            <Packages />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/blogs">
                            <TourTips />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/addNewpack">
                            <AddNewPack />
                        </PrivateRoute>
                        <PrivateRoute path="/package/:orderId">
                            <Parchage />
                        </PrivateRoute>
                        <PrivateRoute path="/updatePackage/:updateId">
                            <UpdatePack />
                        </PrivateRoute>
                        <PrivateRoute path="/manageOrders">
                            <ManageOrders/>
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
