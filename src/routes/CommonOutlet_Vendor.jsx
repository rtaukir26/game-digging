import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Header_Vendor from "../components/Header/Header_Vendor";

const CommonOutlet_Vendor = () => {
  return (
    <div className="main">
      <Header_Vendor />
      <div className="wrapper">
        {/* <div className="sidebar">sidebar</div> */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonOutlet_Vendor;
