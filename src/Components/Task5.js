import React from 'react';


  var style={
    display:"inline-block",
    margin:"10px",
    border:"1px solid red",
    color:"blue",
    width:"300px",
    height:"300px",
    backgroundColor: "yellow"
  }
  
  export function Card(props) {
  
    return (
      <div style={style}>
      {/* интерполяция - встраивание значения перменной в строку */}
        <h1>{props.user.name}</h1>
         <img
          src={props.user.imageUrl}
          alt={'Фото ' + props.user.name}
          style={{width: props.user.imageW, height: props.user.imageH}}/>  
     
           </div>
      
    );
  }


