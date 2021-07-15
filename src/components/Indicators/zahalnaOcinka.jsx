import React from "react";
import arrowDanger from "../image/arrow-danger.svg";
import arrowGreen from "../image/arrow-green.svg";
import arrowOrange from "../image/arrow-orange.svg";

function ZahalnaOcinka(props) {
  let dict = {
    name:{
      zahalnaDilovaAktyvnist : "Ділова активність",
      zahalnaRentabelnist:"Рентабельність",
      operEfektyvnist:"Операційна ефективність",
      finZdorovya:"Фінансове здоров’я"
    },
    indicator: {
      positive: {
        name: "Позитивна",
        class: "background-green",
        img: arrowGreen,
      },
      negative: {
        name: "Негативна",
        class: "background-error-light",
        img: arrowDanger,
      },
      acceptable: {
        name: "Прийнятна",
        class: "background-attention_light",
        img: arrowOrange,
      },
    },
  };
  function calcZahalnaOcinka(values) {
    for(let i = 0; i< values.length; i++){
      if (values < 3) {
        return "negative";
      } else if (values === 3) {
        return "acceptable";
      } else {
        return "positive";
      }
    }
   
  }
  
  let names = props.values;
  
  const block = [];
  const num = [];
  for (var key of Object.keys(names)) {
   block.push(key)
   num.push(names[key])
  }
  console.log(num + "this is num");
  let calc =calcZahalnaOcinka(num)
  
 console.log(calc);
  const blockDiv = block.map((el) => (
    <div className="block">
      <p>{dict.name[el]}</p>
      <div className={dict.indicator[calc].class}>
        <img src={dict.indicator[calc].img} alt="arrow" />
        <span className={dict.indicator[calc].class} id="dilova">
          {names[key]}
        </span>
        <p style={{ color: "white" }}>{dict.indicator[calc].name}</p>
      </div>
    </div>
  ));

  return (
    <div id="zagalna">
      <h3>Загальна оцінка компанії</h3>
      <div className="content">
        <div className="contain">
        {blockDiv}
        </div>
      </div>
      <p className="grey center">
        Детальний розрахунок фінансових і операційних показників
      </p>
    </div>
  );
}
export default ZahalnaOcinka;
