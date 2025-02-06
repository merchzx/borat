import React from 'react';

const user = {
  name: 'Bill Gates',
  imageUrl: 'bg.png',
  imageW: 290,
  imageH: 200,
};
var style = {
  margin: "10px",
  border: "1px solid red",
  color: "blue"
}

export function Profile(props) {

  // return (
  //   <div style={style}>
  //   {/* интерполяция - встраивание значения перменной в строку */}
  //     <h1>{props.bill.name}</h1>
  //     <img
  //       src={props.bill.imageUrl}
  //       alt={'Фото ' + props.bill.name}
  //       style={{width: props.bill.imageW, height: props.bill.imageH}}/>  
  //       <p>{props.text}</p>
  //        </div>

  // );

  return (
    <div style={{
      border:"3px solid white",borderRadius: '25%', display: "flex", marginLeft: '37vw', marginTop: '150px',width:"450px",alignItems:"center",justifyContent:"center",flexWrap:"wrap",flexDirection:"column"
    }}>
      <img
        src={props.artem.img}
        alt={'Photo-Borat'}
        style={{width: '450px',borderRadius: '25% 25% 0%0%'}}>
      </img>
      <p>Name = {props.artem.name}</p>
      <p>SurName = {props.artem.surname}</p>
      <p>Age = {props.artem.age}</p>
      <p>PhoneNumber = {props.artem.phoneNumber}</p>
      <p>Email = {props.artem.email}</p>
    </div>
  )
}


