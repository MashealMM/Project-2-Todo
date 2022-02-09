import React from "react";
 export default function Card(props){

    return(
        <div className="card">
            <span style={{ backgroundColor: props.obj.color}}><b>{props.obj.title}</b></span>
            <img src={props.obj.img} alt=""/>
            


        </div>
    )
 }