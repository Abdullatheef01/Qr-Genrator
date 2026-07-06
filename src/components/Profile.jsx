import "./index1.css";

export const Profile = (props) => {
  return(
        <div className="container"> 
      <h2>{props.id|| "instagram User"}</h2>
       <img src={props.img ||"default1.jpg"} alt="img"></img>
       <h4>{props.name || <span>Null user</span>}</h4>

        {/* follower states */}

       <div className="stats">
    <div>
        <h3>{props.post || "0"}</h3>
        <p>Posts</p>
    </div>

    <div>
        <h3>{props.follower|| "0"}</h3>
        <p>Followers</p>
    </div>

    <div>
        <h3>{props.following || "0"}</h3>
        <p>Following</p>
    </div>
</div>
<div className="btn">
<button className="primary">Follow</button> 
<button className="secondary">Message</button>
</div>

    </div>
);
}
export default Profile