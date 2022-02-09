import React from "react";
 export default function Card_2(props){

    return(
        <div className="card_2">
            <span style={{ backgroundColor: props.obj.color}}><b>{props.obj.title}</b></span>
            <img src={props.obj.img} alt=""/>
            


        </div>
            )
        }