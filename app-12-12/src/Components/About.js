import Details from "./Details";

export default function About(props){
 console.log('About');

 return(
     <div className="About">
         <p>About</p>
         <span>My Name is: </span><span>{props.name}</span>
         <br/>
         <span>My position is: </span><span>{props.position}</span>
         <Details obj_2={props.obj}></Details>
     </div>
 )

}