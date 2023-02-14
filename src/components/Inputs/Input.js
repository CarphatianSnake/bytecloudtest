import { useSelector, useDispatch } from "react-redux";
import { storageChange, transferChange } from "../../slices/pricesSlice";
import AmountHeader from "./AmountHeader/AmountHeader";
import AmountInput from "./AmountInput/AmountInput";

function Input({ type }) {
  const storage = useSelector((state) => state.prices.storage);
  const transfer = useSelector((state) => state.prices.transfer);
  const dispatch = useDispatch();

  const valueByType = type === "Storage" ? storage : transfer;

  const prepareData = (value) => {
    if (typeof +value === "number" && !Number.isNaN(+value) && value !== "") {
      if (+value < 0) {
        return 0;
      }
      if (+value > 1000) {
        return 1000;
      }
      return +value;
    }
    return "";
  };

  function onHandleChange(e) {
    const value = prepareData(e.target.value);
    if (type === "Storage") {
      dispatch(storageChange(value))
    }
    if (type === "Transfer") {
      dispatch(transferChange(value))
    }
  }

  return (
    <div className="input">
      <AmountHeader type={type} value={valueByType} onChange={onHandleChange} />
      <AmountInput type={type} value={valueByType} onChange={onHandleChange} />
    </div>
  )
}

export default Input;