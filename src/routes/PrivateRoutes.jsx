import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { TOKEN, VENDOR_TOKEN } from "../constants/localStorage";
// import useShow from "../customHooks/useShow";
// import { useShowModalContext } from "../context/ShowModalContext";
// import { useShowModalContext_Vendor } from "../context/ShowModalContext_Vendor.jsx";
// import { getToken } from "../utils/helpers.js";
// import { string } from "yup";

const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  // const { setShowModalContext } = useShowModalContext(); //context
  // const token = localStorage.getItem(TOKEN);
  const token = true;

  useEffect(() => {
    if (token === null) {
      return navigate("/login");
    }
  }, []);
  // useEffect(() => {
  //   if (!token) {
  //     setShowModalContext(true);
  //   } else {
  //     setShowModalContext(false); // ✅ close modal after login
  //   }
  // }, [token]); // ✅ watches token changes

  return children;
};

//VENDOR PRIVATE ROUTES
// const PrivateRoutesVendor = ({ children }) => {
//   const navigate = useNavigate();
//   const { setShowModalContext_vendor } = useShowModalContext_Vendor(); //context for vendor screens
//   const tokenVendor = getToken(VENDOR_TOKEN);

//   console.log("tokenVendor", tokenVendor);

//   useEffect(() => {
//     if (!tokenVendor || typeof tokenVendor !== "string") {
//       // console.log("tokenVendor not available");
//       setShowModalContext_vendor(true);
//     } else {
//       // console.log("tokenVendor available");
//       setShowModalContext_vendor(false); // ✅ close modal after login
//     }
//   }, [tokenVendor]); // ✅ watches token changes

//   return children;
// };
// export { PrivateRoutesVendor };
export default PrivateRoutes;
