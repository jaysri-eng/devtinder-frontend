import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import { useEffect } from "react";

function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get("http://localhost:3000/feed?page=1&limit=10", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log("Error fetching feed:", err);
    }
  };

  const handleSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(`http://locahost:3000/request/send/${status}/${_id}`,{},{withCredentials:true});
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="justify-center my-20">
      <h1>Feed</h1>

      {feed && Array.isArray(feed) ? (
        feed.map((user) => {
          const { _id, firstName, lastName, about, age, gender, photoUrl } = user;
          return (
            <div key={_id} className="card bg-base-300 w-96 shadow-sm mb-4">
              <figure>
                <img src={photoUrl} alt="Profile" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                <p className="justify-start">{about}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary" onClick={()=>(handleSendRequest("ignore",_id))}>Ignore</button>
                  <button className="btn btn-primary">Interested</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading feed...</p>
      )}
    </div>
  );
}

export default Feed;
