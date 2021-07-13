import React, {useState, useEffect} from "react";
import ZahalnaOcinka from "./zahalnaOcinka";
import LineChart from "./chart";
import FinSection from "./finSection";
import Otsinka from "./otsinka";


function Indicator() {
    const getData=()=>{
      fetch('data.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(dataJson) {
          console.log(dataJson);
          setData(dataJson)
        });
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
      getData()
    },[])
    
   
  return (
    <div>
        {/* { JSON.stringify(data[0]["finOperPokaznyky"]["dynamika"]) } */}
        <ZahalnaOcinka values={data && data.length > 0 && data[0]["zahalnaOtsinka"]}/>
        
        <FinSection value={data && data.length > 0 && data[0]["zahalnaOtsinka"]}/>
        
      <div className="container">
        <div className="row">
          <div className="name col" id="vyruchka">
            Виручка
          </div>
          <div className="graphic col" id="dynamika">
          <LineChart value={data && data.length > 0 && data[0]["finOperPokaznyky"]}/>
          </div>
          <Otsinka value={data && data.length > 0 && data[0]["finOperPokaznyky"]}/>
        </div>
      </div>
    </div>
  );
}

export default Indicator;
