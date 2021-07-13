import React from 'react'

function Otsinka() {
    
    return(
        <div className="score col">
        {/* <img src="./image/arrow-danger.svg" alt=""> */}
        <span className="error-light">Негативна оцінка</span>
        <p>
          Спостерігається стабільне зниження виручки, що є негативним
          сигналом про скорочення бізнесу
        </p>
        <p className="grey">
          Значимість: <span id="znachymist">0,35</span> | Оцінка:{" "}
          <span className="error-light" id="otsinka">
            0
          </span>
          | Значення:
          <span className="error-light" id="pidsumkoveZnachennya">
            0
          </span>{" "}
        </p>
      </div>
    )
}
export default Otsinka;