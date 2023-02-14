import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import "./Graphic.scss";

function Graphic({ providerName }) {
  const data = useSelector((state) => state.prices[providerName]);
  const totalPrice = data.totalPrice;
  const isLowerPrice = data.lowestPrice;
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const style = isPortrait ? {"height": `${totalPrice + 5}%`} : {"width": `${totalPrice + 5}%`};

  return (
    <div className="graphic">
      <div className={`graphic_line ${isLowerPrice && "graphic_line_top"}`} style={style} />
      <div className="graphic_price">{totalPrice} $</div>
    </div>
  );
}

export default Graphic;