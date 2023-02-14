import { useSelector } from "react-redux";
import Options from "./Options/Options";
import Graphic from "./Graphic/Graphic";

import "./GraphicElement.scss";

function GraphicElement({ providerName }) {
  const data = useSelector((state) => state.prices[providerName]);

  return (
    <li className="graphic-element">
      <div className="name-container">
        <div className="name">{providerName}</div>
        {data.options && <Options name={providerName} />}
      </div>
      <div className={`logo logo_${providerName}`}></div>
      <Graphic providerName={providerName} />
    </li>
  );
}

export default GraphicElement;