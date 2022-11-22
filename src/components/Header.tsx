import { Hexagon, ShoppingCartSimple } from "phosphor-react";

const Header = () => {
  return (
    <div className="flex relative w-full justify-center h-52 items-center">
      <Hexagon className="text-gray-400" size={40} weight="fill" />

      <div className="absolute bottom-6 right-10">
        <ShoppingCartSimple size={25} className="text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
