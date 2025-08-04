import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

function Signup(){
    const [emailId, setEmailId] = useState("jayanth@gmail.com");
    const [password,setPassword] = useState("Jayanth@123");
    const [firstName,setFirstName] = useState("Jayanth@123");
    const [lastName,setLastName] = useState("Jayanth@123");
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignupClick = async () => {
        try{
            const res = await axios.post("http://localhost:3000/signup",{
                emailId,
                password,
                firstName,
                lastName
            },{withCredentials: true});
            dispatch(addUser(res.data.data));
            if(res.status == 200){
                return navigate("/");
            }
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
            console.log(err);
        }
    }

    return (
        <div className="flex justify-center my-20">
            <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Signup</h2>
                <div>
                <input
                    type="text"
                    value={emailId}
                    placeholder="Email-id"
                    className="input input-primary my-5"
                    onChange={(e)=>setEmailId(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="Password"
                    className="input input-primary"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    className="input input-primary"
                    onChange={(e)=>setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    className="input input-primary"
                    onChange={(e)=>setLastName(e.target.value)}
                />
                </div>
                <p className="text-red-500">{error}</p>
                <div className="card-actions justify-end my-5">
                    <button onClick={handleSignupClick()} className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Signup