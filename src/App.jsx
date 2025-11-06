
// import { useEffect } from "react";
import "./App.css"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomeWrapper from "./HomeWrapper/HomeWrapper";
import HomePage from "./pages/HomePage/HomePage";
import OnlinePage from "./pages/OnlinePage/OnlinePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OnePageProduct from "./pages/OnePageProduct/OnePageProduct";
import "./i18n"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage/AdminDashboardPage";
import AdminWrapper from "./AdminWrapper/AdminWrapper";
import AdminAddProductPage from "./pages/AdminAddProductPage/AdminAddProductPage";
import AdminMenuPage from "./pages/AdminMenuProductPage/AdminMenuPage";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector, setIsAuth } from "./store/slices/loginSlice/loginSlice";

function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isAuth = useSelector(isAuthSelector)
  const localIsAuth = localStorage.getItem("isAuth") || "false"
  const dispatch = useDispatch()

  useEffect(() => {
    if (pathname === "/") {
      navigate(`/${i18n.language}/`)
    }
    
    dispatch(setIsAuth(localIsAuth))
    
  }, [])
  
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeWrapper />}>
          <Route path=":lang">
            <Route index element={<HomePage />} />
            <Route path="online" element={<OnlinePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="product/:id" element={<OnePageProduct />} />
          </Route>
        </Route>

        { isAuth === "false" && localIsAuth === "false" && <Route path="/admin/login" element={<AdminLoginPage />} />}
        { isAuth && localIsAuth === "true" &&  <Route path="/admin" element={<AdminWrapper />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/products" element={<AdminAddProductPage/>} />
          <Route path="/admin/menu" element={<AdminMenuPage/>} />
        </Route>}


        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>
  )
}

export default App