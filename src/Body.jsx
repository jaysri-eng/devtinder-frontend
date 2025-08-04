import { Navigate, Outlet, useNavigate } from "react-router-dom"
import NavBar from "./navbar"
import Footer from "./Footer"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {addUser, removeUser} from './utils/userSlice'
import { useEffect } from "react"

function Body() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store)=>store.user);

    const fetchUser = async () => {
        if(userData) return;
        try {
            const user = await axios.get("http://localhost:5173/profile/view",{withCredentials: true});
            dispatch(addUser(user.data));
        } catch (err) {
            if(err.status==401){
                navigate('/login');
            }
            navigate('/login');
            console.log(err);
        }
    }
    // this happens on the first load of the component and this is used to keep the user logged in when refreshing the page etc
    useEffect(()=>{
        fetchUser();
    },[])
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Body