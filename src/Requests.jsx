import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRequests, removeRequest } from "./utils/requestSlice";

function Requests(){
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const requests = useSelector((store)=>store.requests);
    if(!requests) return;
    if(requests.length===0) return "No requests found";
    const reviewRequests = async (status,_id) => {
        try {
            const res = axios.post(`http://localhost:3000/review/${status}/${_id}`,{},{withCredentials:true});
            dispatch(removeRequest(_id));
        } catch (err) {
            console.log(err);
        }
    }
    const fetchRequests = async () => {
        try{
            axios.get("http://localhost:3000/user/requests",{withCredentials:true});
            dispatch(addRequests(res.data));
        } catch (err) {
            setError(err);
        }
    }
    useEffect(()=>{fetchRequests()},[]);
    return (
        <div className="text-center my-10">
            <h1>Connection requests</h1>
            {requests.map(request=>{
                const {_id, firstName, lastName, about, age, gender, photoUrl} = request;
                return (
                    <div key={_id}>
                        <div>
                            <img src={photoUrl} alt="profile pic" className="w-20 h-20 my-10 mx-10"/>
                        <h1>{firstName}{" "}{lastName}</h1>
                        <p>{about}</p>
                        <p>{gender}{" "}{age}</p>
                        </div>
                        <div>
                            <button className="btn btn-primary mx-2" onClick={()=>reviewRequests("rejected",request._id)}>Reject</button>
                            <button className="btn btn-secondary mx-2" onClick={()=>reviewRequests("accepted",request._id)}>Accept</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Requests