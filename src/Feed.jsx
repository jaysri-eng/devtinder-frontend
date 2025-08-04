import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

function Feed(){
    const feed = useSelector((store)=>store.feed);
    const dispatch = useDispatch();
    const getFeed = async () => {
        if(feed) return;
        try {
            const res = await axios.get("http://localhost:3000/feed",{withCredentials:true});
            dispatch(addFeed(res.data));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{getFeed()},[])
    return (
        <div className="justify-center my-20">
            <a>Feed</a>
            <UserCard/>
        </div>
    )
}
export default Feed