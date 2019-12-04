import React from 'react';
import './Shuttle3.css';

let cards=[
  {
    shuttle: "Shuttle1 沪12345",
  place: "Jinqiao-AB",
  time:"8:45 12.2 Mon.",
  driver:"朱 Zhu 1234567890",
  },
  {
    shuttle: "Shuttle2 沪22222",
  place:"AB-Jinqiao",
  time:"23:45 12.1 Sun.",
  driver:"王 Wang 11222213",
  },
  {
  shuttle: "Shuttle5 沪djdnmx",
  place:"Jinqiao-AB",
  time:"15:15 12.1 Sun. ",
  driver:"李 Li 123284438312",
  },
  ]
  
  function Shuttle3() {
    return (
      <div className="Shuttle3">
        <div className="title">My Shuttle Records</div>
        <div className="shuttlecards">
       {cards.map(makecards)}
       <button className="mybutton1" >back</button>
       </div>
      </div>
    );
    }
  
    function makecards(data) {
      console.log(data);
      return(
        
          <Product shuttle={data.shuttle} place={data.place} time={data.time} driver={data.driver} />
      );
    }
    function Product(props) {
      return(
        <div className="product">
          <div className="shuttle">{props.shuttle}</div>
          <div className="place">{props.place}</div>
          <div className="time">{props.time}</div>
          <div className="driver">{props.driver}</div>
          <button className="mybutton2" >Call</button>
          </div>
      )
    }
  
  export default Shuttle3;


