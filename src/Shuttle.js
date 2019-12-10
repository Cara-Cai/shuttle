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
  shuttle: "Shuttle1 沪12345",
seat:34,
booked:20,
time:"Scheduled to leave: 7:05",
driver:"朱 Zhu 1234567890",
id: 0
},
{
  shuttle: "Shuttle2 沪22222",
seat:0,
booked:9,
time:"Scheduled to leave: 7:10",
driver:"王 Wang 11222213",
id: 1
},
{
shuttle: "Shuttle3 沪123123",
seat:0,
booked:0,
time:"Scheduled to leave: 7:15",
driver:"李 Li 123284438312",
id: 2
},
]

function Shuttle() {
  const [booked, setBook] = useState([20,9,0]);
  const [seat,setSeat] = useState([34,0,0]);


  return (
    <div className="Shuttle">
      <Link to="/"><button className="mybutton1" >back</button></Link>
      <div className="title2">Available buses: Jinqiao - AB</div>
      <div className="shuttlecards">
     {cards.map(data => {
       return(
        <Cards handleClick={setBook} handleClick={setSeat} booked={booked[data.id]} shuttle={data.shuttle}  seat={seat[data.id]} time={data.time} driver={data.driver} id={data.id}/>
       );
     })}
     </div>
    </div>
  );
  }



 

  function Cards(props) {

    const [booked, setBooked] = useState(props.booked);
    const [seat, setSeat] = useState(props.seat)
    function addOne() {

      setBooked(booked + 1);
      console.log(booked);

      } 

    function minusOne(){
        setSeat(seat - 1);
      console.log(seat);
      }
  
    return(
      <div className="cards">
        <div className="shuttle">{props.shuttle}</div>
        <div className="seat">{seat}/50</div>
        <div className="booked">{booked} more booked</div>
        <div className="time">{props.time}</div>
        <div className="driver">{props.driver}</div>
        <button className="button1" onClick={addOne}>book</button>
        <button className="button1" onClick={minusOne}>leave</button>
        </div>
    )
  }

export default Shuttle;
