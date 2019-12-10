import React, { useState } from 'react';
import './Shuttle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


let cards=[
{
  shuttle: "Shuttle1 沪12345  7:05",
seat:34,
booked:20,
driver:"朱 Zhu 1234567890",
num:0,
id: 0
},
{
  shuttle: "Shuttle2 沪22222  7:10",
seat:0,
booked:9,
driver:"王 Wang 11222213",
num:0,
id: 1
},
{
shuttle: "Shuttle3 沪123123  7:15",
seat:0,
booked:0,
driver:"李 Li 123284438312",
num:0,
id: 2
},
]

function Shuttle() {
  const [booked, setBook] = useState([20,9,0]);
  const [num, setNum] = useState([0,0,0]);
  


  return (
    <div className="Shuttle">
      <Link to="/"><button className="mybutton1" >back</button></Link>
      <div className="title2">Available buses: Jinqiao - AB</div>
      <div className="shuttlecards">
     {cards.map(data => {
       return(
        <Cards handleClick={setBook} handleClick={setNum} num={num[data.id]} booked={booked[data.id]} shuttle={data.shuttle}  seat={data.seat}  driver={data.driver} id={data.id}/>
       );
     })}
     </div>
    </div>
  );
  }



 

  function Cards(props) {

    const [booked, setBooked] = useState(props.booked);
    const [num, setNum] = useState(props.num);

    function addOne() {

      setBooked(booked + 1);
      setNum(num+1);
      console.log(booked);
      console.log(num);

      } 

    function minusOne(){
        setBooked(booked - 1);
      console.log(booked);
      setNum(num - 1);
      console.log(num);

      }
  
    return(
      <div className="cards">
        <div className="shuttle">{props.shuttle}</div>
        <div className="seat">{props.seat}/50</div>
        <div className="booked">{booked} more booked</div>
        <div className="num">You've booked {num} seat</div>
        <div className="driver">{props.driver}</div>
        <button className="button1" onClick={addOne}>book</button>
        <button className="button1" onClick={minusOne}>unbook</button>
        </div>
    )
  }
  
export default Shuttle;
