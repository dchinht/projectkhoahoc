import { NavLink } from "react-router-dom"
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function ListAdmin() {
  const active = "flex gap-[10px] px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-[#1A2331] rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
  const active1 = "flex gap-[10px] px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
  return (
    <div>
        <aside className="mt-[130px] bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[800px] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
          <div className="relative border-b border-white/20">
            <button
              className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="m-4">
            <ul className="mb-4 flex flex-col gap-1">
              <li>
                <NavLink  to="/admin"   className={({ isActive }) => {
                      return isActive ? active1 : active;
                    }}>
                    <AccountTreeIcon className="w-5 h-5 text-inherit" />
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      dashboard
                    </p>
                </NavLink>
              </li>
              <li>
                <NavLink  to="/user-manager"   className={({ isActive }) => {
                      return isActive ? active1 : active;
                    }}>
                    <AccountCircleIcon className="w-5 h-5 text-inherit" />
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                       User Manager
                    </p>
                </NavLink>
              </li>
              <li>
                <NavLink  to="/product-manager"   className={({ isActive }) => {
                      return isActive ? active1 : active;
                    }}>
                    <LocalMallIcon className="w-5 h-5 text-inherit" />
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                       Product Manager
                    </p>
                </NavLink>
              </li>
              <li>
                <NavLink  to="/"   className={({ isActive }) => {
                      return isActive ? active1 : active;
                    }}>
                    <HomeIcon className="w-5 h-5 text-inherit" />
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                       Home Page
                    </p>
                </NavLink>
              </li>
            </ul>

          </div>
        </aside>
    </div>
  )
}

export default ListAdmin