import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/AuthSlice";

const Navbar = () => {
    const {user} = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const handleLogOut = () => {
      dispatch(logOutUser())
    }

  return (
    <nav className="py-2 px-8 bg-blue-900 flex items-center justify-between">
      <Link to={"/"}>
      <h1 className="text-white font-black text-xl">Auth-App</h1>
      </Link>
      <div>
        {!user ? (
                <>
                <Link
                 className="py-1 px-2 rounded-md bg-lime-500 text-sm font-bold mx-1" to="/login"
                >
                  Login
                </Link>
                <Link
                 className="py-1 px-2 rounded-md bg-lime-500 text-sm font-bold mx-1" to="/Register"
                >
                  Register
                </Link>
                </>
            ) : (
                <button 
                onClick={handleLogOut}
                className="py-1 px-2 rounded-md bg-red-500 text-sm font-bold mx-1">
                    Logout
                </button>
            )
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
