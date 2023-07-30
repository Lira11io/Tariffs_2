import React, { useState } from "react";
import "../styles/tariff.scss";

export default function Tariff(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div
      onClick={handleClick}
      className={
        click ? "tariff-container" : "selected"
      } /* + (props.isSelected ? "selected" : "") */
      key={props.index}
    >
      <div
        className={
          "tariff-blok " +
          (props.blueColor ? "blueColor" : "") +
          (props.greenColor ? "greenColor" : "") +
          (props.redColor ? "redColor" : "") +
          (props.blackColor ? "blackColor" : "")
        }
      >
        <div className="tariff-name">{props.name}</div>
        <div className="tariff-price">
          <span className="tariff-price-item">{props.price}</span> руб/мес
        </div>
      </div>
      <div className="tariff-speed">до {props.speed} Мбит/сек</div>
      <div className="tariff-traffic">{props.traffic}</div>
    </div>
  );
}
