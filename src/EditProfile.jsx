import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const EditProfile = ({user}) => {
    const [emailId, setEmailId] = useState("");
    const [password,setPassword] = useState("");
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState("");
    const [about, setAbout] = useState("");
    const [age, setAge] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [gender, setGender] = useState("");
    const [error,setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditProfileClick = async () => {
        try{
            const res = await axios.post("http://localhost:3000/profile/edit",{
                emailId,
                firstName,
                lastName,
                about,
                age,
                photoUrl,
                gender
            },{withCredentials: true});
            dispatch(addUser(res?.data?.data));
            if(res.status == 200){
                setSuccessMessage(res.data);
            }
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
            console.log(err);
        }
    }

    return (
        <div className="flex justify-around gap-20">
            <div className="flex justify-center my-20">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                <h2 className="card-title">Edit profile</h2>
                <div>
                    <input
                    type="text"
                    value={emailId}
                    placeholder="Email-id"
                    className="input input-primary my-5"
                    onChange={(e) => setEmailId(e.target.value)}
                    />
                    <input
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    className="input input-primary my-5"
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    className="input input-primary my-5"
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                    type="text"
                    value={about}
                    placeholder="About"
                    className="input input-primary my-5"
                    onChange={(e) => setAbout(e.target.value)}
                    />
                    <input
                    type="text"
                    value={age}
                    placeholder="Age"
                    className="input input-primary my-5"
                    onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                    type="text"
                    value={photoUrl}
                    placeholder="Profile pic"
                    className="input input-primary my-5"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    />
                    <input
                    type="text"
                    value={gender}
                    placeholder="Gender"
                    className="input input-primary my-5"
                    onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <p className="text-red-500">{error}</p>
                <p className="text-red-500">{successMessage}</p>
                <div className="card-actions justify-end my-5">
                    <button
                    onClick={handleEditProfileClick}
                    className="btn btn-primary"
                    >
                    Save
                    </button>
                </div>
                </div>
            </div>
            </div>
            <UserCard user={{firstName, lastName, photoUrl, about, gender, age}}/>
        </div>
    );
}

export default EditProfile;