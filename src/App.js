import './App.css';
import { Test1,Task3, MyApp } from './Components/Task1';
import { Profile ,Main} from './Components/Task2';
import { Ifrender } from './Components/Task3';
import{ShoppingList} from './Components/Task4'
import { Card} from './Components/Task5';

function App()
 {
  const user = {
    name: 'Bill Gates',
    imageUrl: 'bg.png',
    imageW: 260,
    imageH: 200,
  };
  const user2 = {
    name: 'Bill Gates',
    imageUrl: 'logo192.png',
    imageW: 260,
    imageH: 200,
  };

  const userArtem = {
    name:"Artem",
    surname:"Rudomanenko",
    age:16,
    phoneNumber:"+380999999999",
    email:"yakrutoymaliy@gmail.com",
    img:"borat.jpg"
  };

  return (
    <div>

     {/* <Test1></Test1> 
     <Task3></Task3> */}
     {/* <MyApp></MyApp>  */}
     <Profile artem = {userArtem}></Profile>     
     {/* <Ifrender></Ifrender> */}
     {/* <ShoppingList></ShoppingList> */}
     {/* <Card user = {user}></Card>
     <Card user = {user2}></Card> 
     <Card user = {user}></Card> */}
  

    </div>
  );
}

export default App;


