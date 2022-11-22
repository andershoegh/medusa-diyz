import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="">
      <div className="w-full h-40 bg-green-200">Header</div>
      <div className="flex">
        <div className="w-60 bg-red-200">Sidebar</div>
        <div className="w-full h-40 bg-yellow-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
