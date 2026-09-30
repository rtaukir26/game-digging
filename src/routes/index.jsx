import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import CommonOutlet from "./CommonOutlet";
// import Home from "../pages/Home/Home";
// import OnBoarding from "../pages/OnBoarding/OnBoarding";
import { routePaths } from "./routePaths";
import { ToastContainer } from "react-toastify";
import Dashboard from "../pages/Dashboard/Dashboard";
import GameScreen from "../pages/GameScreen/GameScreen";
// import ProductDetails from "../pages/ProductDetails/ProductDetails";
// import Login from "../pages/Login/Login";
// import Carts from "../pages/Carts/Carts";
// import { useShowModalContext } from "../context/ShowModalContext";
// import LoginModal from "../components/ReactModals/LoginModal/LoginModal";
// import ChatScreen from "../pages/ChatScreen/ChatScreen";
// import VendorDashboard from "../pages/VendorScreens/VendorDashboard/VendorDashboard";
// import VendorUserChat from "../pages/VendorScreens/VendorUserChat/VendorUserChat";
// import { useShowModalContext_Vendor } from "../context/ShowModalContext_Vendor";
// import LoginModal_Vendor from "../components/ReactModals/LoginModal_Vendor/LoginModal_Vendor";
// import CommonOutlet_Vendor from "./CommonOutlet_Vendor";
// import VendorChatList from "../pages/VendorScreens/VendorChatList/VendorChatList";
// import VendorProductList from "../pages/VendorScreens/VendorProductList/VendorProductList";
// import ProductPurchaseDetails_Vendor from "../pages/VendorScreens/ProductPurchaseDetails/ProductPurchaseDetails_Vendor";

const AppRoutes = () => {
  // const { showModalContext, setShowModalContext } = useShowModalContext(); //For users
  // const { showModalContext_vendor, setShowModalContext_vendor } =
  //   useShowModalContext_Vendor(); //For Vendors

  // console.log("showModalContext_vendor", showModalContext_vendor);
  return (
    <Router>
      <ToastContainer
      // autoClose={20000000000}
      />
      {/* <LoginModal isOpen={showModalContext} setIsOpen={setShowModalContext} />
      <LoginModal_Vendor
        isOpen={showModalContext_vendor}
        setIsOpen={setShowModalContext_vendor}
      /> */}
      <Routes>
        <Route path="*" element={<div>404 - Page no found</div>} />
        {/* <Route path={routePaths.login} element={<Login />} /> */}
        {/* <Route path={routePaths.home} element={<Home />} /> */}
        {/* <Route path={routePaths.onboarding} element={<OnBoarding />} /> */}
        {/* <Route path={routePaths.dashboard} element={<Dashboard />} /> */}
        <Route path={routePaths.dashboard} element={<GameScreen />} />
        <Route
          element={
            <PrivateRoutes>
              <CommonOutlet />
            </PrivateRoutes>
          }
        >
          {/* <Route path={routePaths.dashboard} element={<Dashboard />} /> */}
          <Route path={routePaths.gameScreen} element={<GameScreen />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
