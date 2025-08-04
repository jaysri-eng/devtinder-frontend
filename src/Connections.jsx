import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addConnections } from "./utils/connectionSlice";

function Connections(){
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const connections = useSelector((store)=>store.connections);
    if(!connections) return;
    if(connections.length===0) return "No connections found";
    const fetchConnections = async () => {
        try{
            axios.get("http://localhost:3000/user/connections",{withCredentials:true});
            dispatch(addConnections(res.data));
        } catch (err) {
            setError(err);
        }
    }
    useEffect(()=>{fetchConnections()},[]);
    return (
        <div className="text-center my-10">
            <h1>Connections</h1>
            {connections.map(connection=>{
                const {_id, firstName, lastName, about, age, gender, photoUrl} = connection;
                return (
                    <div key={_id}>
                        <img src={photoUrl} alt="profile pic" className="w-20 h-20 my-10 mx-10"/>
                        <h1>{firstName}{" "}{lastName}</h1>
                        <p>{about}</p>
                        <p>{gender}{" "}{age}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Connections