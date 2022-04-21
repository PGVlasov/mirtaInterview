import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Image } from "./components/Image";
import { NavMenu } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { MainPage } from "./pages/MainPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavMenu />
        <div className="container">
          <Routes>
            <Route element={<MainPage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<Image />} path="/image/:id" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
