import React from 'react'

function Otsinka(props) {
  let dict = {
    indicator: {
      positive: {
        name: "Позитивна оцінка",
        class: "green",
      },
      negative: {
        name: "Негативна оцінка",
        class: "error-light",
      },
      acceptable: {
        name: "Прийнятна оцінка",
        class: "attention_light",
      },
    },
  };
  function calcVal(otsinka, znachennya, znachymist) {
      if (otsinka < 3 && znachennya < 3 && znachymist <3) {
        return "negative";
      } else if (otsinka === 3 && znachennya === 3) {
        return "acceptable";
      } else {
        return "positive";
      }
  }
  const num = [];
  const names = props.value;
  for (var key of Object.keys(names)) {
   
   num.push(names[key])
  }
  
  const calc = calcVal(num)

    return(
        <div className="score col">
        {/* <img src="./image/arrow-danger.svg" alt=""> */}
    <span className={dict.indicator[calc].class}>{dict.indicator[calc].name}</span>
        <p>
          Спостерігається стабільне зниження виручки, що є негативним
          сигналом про скорочення бізнесу
        </p>
        <p className="grey">
    Значимість: <span id="znachymist">{props.value[0]}</span> | Оцінка:{" "}
          <span className={dict.indicator[calc].class} id="otsinka">
            {props.value[1]}
          </span>
          | Значення:
          <span className={dict.indicator[calc].class} id="pidsumkoveZnachennya">
            {props.value[2]}
          </span>{" "}
        </p>
      </div>
    )
}
export default Otsinka;