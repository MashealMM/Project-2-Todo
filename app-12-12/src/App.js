import React from "react";
import './App.css';
import About from "./Components/About";
import Card_2 from "./Components/Card_2";
//import Contact from "./Components/Contact";
import Card from "./Components/Card";
 import javascript from "./javascript.png";
 import node from "./node.png";
 import react from "./react.png";
 const newArray= ['msh','ail','moh'].map((elem,i)=>{
  return elem.toUpperCase()  
})
 


const cardInfo=[{title:"javascript" ,
img:javascript ,color: "yellow"},{title:"node" ,
img:node,  color: "green"},{title:"react" ,
img: react,
 color: "aqua"}]

 const cardMap=cardInfo.map((elem,i)=>{
   return <Card_2 obj={elem}/>

 })

const newArray_2= ['msh','ail','moh'].map((elem,i)=>{
  return <p>Hello:  {elem}</p> 
})

const newArray_3=[{name:"Mashael" , position: "Information Technolohy"},
{name: "Mohammed" , position: "Information Technolohy"} , {name:"Ail" , position:"Information System"}
].map((elemobj,i)=>{
  return  <About name={elemobj.name}  position={elemobj.position} />;
});
function App() {

  return (
    <div className="App">
      <p>Tuwaiq Academy</p>
      <Card_2></Card_2>
 
  

{/*<Card obj={{title:"javascript" ,
 img:javascript ,color: "yellow"}}/>
<Card obj={{title:"node" ,
img:node,  color: "green"}} />
<Card obj={{title:"react" ,
 img: react,
  color: "aqua"}}/>*/}

  {/*map*/}

{newArray_2}
{cardMap}


    
    </div>
  );
}

export default App;
