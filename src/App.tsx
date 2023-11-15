import { ThemeProvider } from "@mui/system";
import "./App.css";
import theme from "./assets/theme";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import SignUp from "./pages/authUi/signup/SignUp";
import SignIn from "./pages/authUi/signin/SignIn";
import Layout from "./layout/Layout";
import Explore from "./pages/explore/Explore";
import MiniDrawer from "./components/Layout";
import Profile from "./pages/profile/Profile";
import SearchBar from "./components/SearchBar";
import Search from "./pages/search/Search";
import { Provider } from "react-redux";
import { store } from "./store";
import EditProfile from "./pages/editProfile/EditProfile";

function App() {
  const location = useLocation();

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {location.pathname == "/" ? <Navbar /> : null}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/home" element={<Explore />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/edit" element={<EditProfile />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
