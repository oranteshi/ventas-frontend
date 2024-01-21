import React from "react";
import style from "../styles/Card.module.css";
import chatSvg from "../../public/chat.svg";
function Card({ nombreProducto = "", descuento = 0, precio = 0 }) {
  return (
    <article className={style.container}>
      <figure>
        <img src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg" />
        <figcaption>{nombreProducto}</figcaption>
      </figure>
      <div className={style.containerData}>
        <div>
          {descuento !== 0 && <span> - {descuento}%</span>}
          <span>${precio}</span>
        </div>
        <button>
          <img src={chatSvg} />
        </button>
      </div>
    </article>
  );
}

export default Card;
