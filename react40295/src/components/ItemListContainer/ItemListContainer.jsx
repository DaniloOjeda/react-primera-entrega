import React from "react";
import "./item.css";

function ItemListContainer({price, title, imgurl, description}) {
    
  return (
    <div className="card">  
        <div clasName="card-img"> 
            <img src={imgurl}alt="imagen del producto"></img>
             </div>    
             <div className="card-detail">
             <h2>{title}</h2>
             <h4>$ {price}</h4>   
             <p>{description}</p>
             </div>
          </div>
  );
}

export default ItemListContainer