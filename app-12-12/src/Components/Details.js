import React from "react";
 export default function Details(props){

    return(
        <div className="Details">

<p>age: {props.obj_2.age}</p>
<p>likes: {props.obj_2.likes}</p>

        </div>
    )
 }