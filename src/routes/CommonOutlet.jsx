import { Outlet } from "react-router-dom";
// import Header from "../components/Header/Header";

const CommonOutlet = () => {
  return (
    <div className="main">
      {/* <Header /> */}
      <div className="wrapper">
        {/* <div className="sidebar">sidebar</div> */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonOutlet;
