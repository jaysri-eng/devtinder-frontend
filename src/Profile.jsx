import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"

function Profile(){
    const user = useSelector((store)=>store.user);
    return (
        <div className="my-20">
            {user && (
                <EditProfile user={user}/>
            )}
        </div>
    )
}
export default Profile