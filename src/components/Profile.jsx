const data=[
    {
        name:"latheef",
        id:"koli kada",
        img:"/img3.jpg",
        post:8,
        follower:1,
        following:5,
    },
    {
        name:"Abdul",
        img:"/pic.png",
        post:8,
        follower:1,
        following:5,
    },
    {
        name:"Abdul",
        img:"/img2.jpg",
        post:8,
        follower:1,
        following:5,
    },
];

import "./index1.css";
function Insta(props){
   
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

export const Profile = () => {
  return ( 
    <div className="profiles">
        {data.map((item)=>(
            <Insta
            name={item.name}
            id={item.id}
            img={item.img}
            post={item.post}
            follower={item.follower}
            following={item.following}
            />
        )
        
        )}
     </div>
  );
}
export default Profile