import React from "react";
import "../styles/tariff.scss";

export default function Tariff(props) {
  //const [click, setClick] = useState(false);
  const handleClick = () => {
    props.onTariffClick(props.name);
  };
  const tariffClasses = `tariff-blok ${props.blueColor ? "blueColor" : ""} ${
    props.greenColor ? "greenColor" : ""
  } ${props.redColor ? "redColor" : ""} ${
    props.blackColor ? "blackColor" : ""
  }`;

  return (
    <div
      onClick={handleClick}
      className={props.isSelected ? "selected" : "tariff-container"}
      key={props.index}
    >
      <div className={tariffClasses}>
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
