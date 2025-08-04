import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
    const user = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await axios.post('http://localhost:3000/logout',{},{withCredentials:true});
            dispatch(removeUser());
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="navbar bg-base-300 shadow-sm justify-between fixed top-0 left-0">
            <div className="flex">
                <Link to="/" className="btn btn-ghost text-xl">Devinder</Link>
            </div>
            <div className="flex gap-2">
                {user && (
                    <div className="dropdown dropdown-end mx-5">
                    <a>Welcome {user.firstName}</a>
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                        <img
                            alt="User profile"
                            src={user.photoUrl}
                        />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                        <Link to="/profile" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/connections">Connections</Link>
                        </li>
                        <li>
                        <Link to="/requests">Requests</Link>
                        </li>
                        <li>
                        <a onClick={handleLogout()}>Logout</a>
                        </li>
                    </ul>
                    </div>
                )}
            </div>
            </div>
        </>
    );
}

export default NavBar