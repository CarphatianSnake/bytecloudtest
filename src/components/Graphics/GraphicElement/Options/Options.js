import { useSelector, useDispatch } from "react-redux";
import { setActiveOption } from "../../../../slices/pricesSlice";

function Options({ name }) {

  const optionsData = useSelector((state) => state.prices[name].options);
  const dispatch = useDispatch();

  const optionsEntries = Object.entries(optionsData);

  function onHandleChange(optionName) {
    const data = {...optionsData};
    for (let key in data) {
      if (key === optionName) {
        data[key] = true;
      } else {
        data[key] = false;
      }
    }
    dispatch(setActiveOption([name, data]));
  }

  const options = optionsEntries.map(([optionName, value]) => {
    return (
      <div className="option" key={optionName} onClick={() => onHandleChange(optionName)}>
        <div className={`option-marker ${value && "active"}`} />
        <div className="option-name">{optionName}</div>
      </div>
    );
  })

  return(
    <div className="options-container">
      {options}
    </div>
  );
}

export default Options;