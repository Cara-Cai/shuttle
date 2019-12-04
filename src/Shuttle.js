import React from 'react';
import './Shuttle.css';

let cards=[
{
  shuttle: "Shuttle1 沪12345",
seat:"seats: 34/50",
booked:"20 more booked",
time:"Scheduled to leave: 7:05",
driver:"朱 Zhu 1234567890",
},
{
  shuttle: "Shuttle2 沪22222",
seat:"seats: 0/50",
booked:"0 more booked",
time:"Scheduled to leave: 7:10",
driver:"王 Wang 11222213",
},
{
shuttle: "Shuttle3 沪123123",
seat:"seats: 0/50",
booked:"0 more booked",
time:"Scheduled to leave: 7:15",
driver:"李 Li 123284438312",
},
]

function Shuttle() {
  return (
    <div className="Shuttle">
      <div className="title1">Available shuttle buses</div>
      <div className="title2">Jinqiao - AB</div>
      <div className="shuttlecards">
     {cards.map(makecards)}
     </div>
    </div>
  );
  }

  function makecards(data) {
    console.log(data);
    return(
      
        <Cards shuttle={data.shuttle}  seat={data.seat} booked={data.booked} time={data.time} driver={data.driver} />
    );
  }
  function Cards(props) {
    return(
      <div className="cards">
        <div className="shuttle">{props.shuttle}</div>
        <div className="seat">{props.seat}</div>
        <div className="booked">{props.booked}</div>
        <div className="time">{props.time}</div>
        <div className="driver">{props.driver}</div>
        <button className="button1" >book</button>
        <button className="button1" >leave</button>
        </div>
    )
  }

export default Shuttle;
