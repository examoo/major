import { useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import logoFull from '../../public/logo-full.png';
import PowerIcon from '../Icons/PowerIcon';
import ShopIcon from '../Icons/ShopIcon';
import { Link, useNavigate } from "react-router-dom";
import CollectionList from "./ui/collection-list";
const Topbar = ({onLogout}) => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="shadow sticky top-0 bg-[#242424] opacity-90 w-full border-b border-[#3F3F3F] z-99">
      <div className="w-full px-4 ">
        <div className="flex justify-between">
          <div className="flex space-x-4 justify-between w-full">
            <div className="hidden md:flex items-center justify-start space-x-1 w-1/3">
              <a
                href="#"
                className="py-5 px-3 text-gray-200 font-medium hover:text-[#e63946] border-b-2 border-[#e63946] "
              >
                <MenuIcon
                  width={24}
                  height={24}
                  fill="none"
                  className="cursor-pointer hover:text-[#e63946]"
                  stroke="currentColor"
                />
              </a>
                      <CollectionList />

            </div>

            <div className="w-1/3 flex justify-center">
              <Link to="/" className="flex items-center py-2 px-2 ">
                <img src={logoFull} alt="major" className="w-[75px]" />
              </Link>
            </div>

            <div className="w-1/3 hidden md:flex items-center justify-end space-x-4">
              <PowerIcon
                onClick={() => onLogout(false)}
                width={24}
                height={24}
                fill="none"
                className="cursor-pointer hover:text-[#e63946]"
                stroke="currentColor"
              />
                <ShopIcon
                  width={24}
                  height={24}
                  fill="none"
                  className="cursor-pointer hover:text-[#e63946]"
                  stroke="currentColor"
                  onClick={() => navigate('/shop')}
                />
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
            >
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu md:hidden ${isMobileMenuOpen ? "" : "hidden"
          }`}
      >
        <CollectionList />
        <div className="py-2 px-4 border-t border-gray-200 dark:border-gray-700">
          <Link to="/shop" className="font-bold">
          Shop
        </Link>

          <button onClick={() => setIsAuthenticated(false)} className="block my-2 w-full px-4 py-2 bg-[#E63946] hover:bg-[#DF3844] rounded-md transition-colors duration-300 cursor-pointer">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;