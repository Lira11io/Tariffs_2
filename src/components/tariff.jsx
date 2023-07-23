import "../styles/tariff.scss";

export default function Tariff(props) {
  return (
    <div
      className={"tariff-container " + (props.isSelected ? "selected" : "")}
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
