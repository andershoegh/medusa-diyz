import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const Root = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
};
