import React from 'react';

export function Test1()
 {
    return <h1>Hello world</h1>;
 }

export function  Task3() {
  const obj = {
    name:"Oleg",
    surname:"Popov",
    age:19
  }
  return <div>
    <p>
      Name - {obj.name}
    </p>
    <p>
      Surname - {obj.surname}
    </p>
    <p>
      Age - {obj.age}
    </p>
  </div>
}

// Вложенные компоненты
function MyButton() 
{
    return (
      <button>OK</button>
    );
}

export function MyApp() {
  var style={
    margin:"10px 10px 10px 20px",
    border:"1px solid red",
    color:"blue"
  }
    return (
      <div style={style}>
        <h1>Добро пожаловать в моё приложение</h1>
        
        <MyButton/>
        
      </div>
    );
  }

  // Обратите внимание на то, что <MyButton /> начинается с заглавной буквы. Это отличительная черта компонентов React. Названия компонентов в React всегда должны начинаться с заглавной буквы, а теги HTML — с маленькой.