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
    
    const dict = {
      name:{
        vyruchka: "Виручка",
        valyutaBalansu: "Валюта балансу",
        oborotnyyKapital:"Оборотний капітал, тис. грн",
        chastkaOborotnohoKapitalu:"Частка оборотного капіталу від виручки, %",
      }
    }
    const finOperPokaznik = data && data.length > 0 && data[0]["finOperPokaznyky"];
    const arr =[];
    for (var key of Object.keys(finOperPokaznik)) {
      console.log(key + " -> " + finOperPokaznik[key]);
      arr.push(finOperPokaznik[key])
    }
   
    let section = arr.map(el =>(
      <>
      <div className="container">
        <div className="row">
          <div className="name col" id="vyruchka">
            {dict.name[el.category]}
          </div>
          <div className="graphic col" id="dynamika">
          <LineChart value={[el.dynamika, el.dynamika]}/>
          </div>
          <Otsinka value={[el.znachymist, el.otsinka, el.pidsumkoveZnachennya ]}/>
        </div>
      </div>
      </>
    ))
   
    
  return (
    <div>
        <ZahalnaOcinka values={data && data.length > 0 && data[0]["zahalnaOtsinka"]}/>
        <FinSection value={data && data.length > 0 && data[0]["finOperPokaznyky"]}/>
        
        {section}
      
    </div>
  );
}

export default Indicator;
