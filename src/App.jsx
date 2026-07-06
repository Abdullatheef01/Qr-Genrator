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
import Profile from "./components/Profile.jsx";
function App(){
  
  return (
  <>
  <div className="app-container">
   {data.map((item)=>(
            <Profile 
            key={item}
            name={item.name}
            id={item.id}
            img={item.img}
            post={item.post}
            follower={item.follower}
            following={item.following}
            />
        ))}
        </div>
        </>
    
 
   
)}

export default App;  