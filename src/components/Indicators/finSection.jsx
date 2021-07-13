import React from "react";

function FinSection(props) {

let dict = {
  "indicator": {
    "positive": {
      "name": "Позитивна",
      "class": "green"
    },
    "negative": {
      "name": "Негативна",
      "class": "error-light"
    },
    "acceptable": {
      "name": "Прийнятна",
      "class": "attention_light"
    }
  }
}
function calcZahalnaOcinka(value) {
    if (value < 3) {
      return "negative"
    } else if (value == 3) {
      return "acceptable"
    } else {
      return "positive"
    }
  }
  

  return (
    <div className="fin-section">
      <h3 id="dilovaAktyvnist">Ділова активність</h3>
      <div className="content">
        <div className="title">
          <p className="left center">
            Загальна оцінка: <span className='error-light'>Негативна </span>
            | Сума по блокам показників:{" "}
            <span className="error-light">3.25</span>
          </p>
          <p className="right-blue">
            Методологія
            {/* <img src="./image/arrow-blue.svg" alt="" /> */}
          </p>
        </div>
        <p>
          <strong>Ділова активність</strong>{" "}
          <span className="grey">
            - це сукупність фінансових показників, що характеризують параметри,
            які відображають зміни в оборотах компанії. Збалансована позитивна
            зміна виручки, валюти балансу і оборотного капіталу свідчать про
            можливість стійкого зростання бізнесу в цілому і його частки на
            ринку відповідно.
          </span>
        </p>
      </div>
    </div>
  );
}

export default FinSection;
