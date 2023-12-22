import { Link, NavLink } from "react-router-dom";
import Button from "./components/Button";

const NavBar = () => {
    return (
        <div className="bg-[#1e293b] text-white px-2 sm:px-6">
      <div className="navbar max-w-7xl mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#08133a] text-white rounded-box w-52">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-500 font-bold underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>                          
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-500 font-bold underline" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-500 font-bold underline" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to='/' className="text-xl sm:text-2xl font-bold italic flex">Tas<span className="text-yellow-500">Ky</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-500 font-bold underline" : ""
                }
              >
                Home
              </NavLink>
            </li>          
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-500 font-bold underline" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-500 font-bold underline" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            <Link to='/login'>
                <Button text={"Login"}></Button>
            </Link>      
        </div>
      </div>
    </div>
    );
};

export default NavBar;