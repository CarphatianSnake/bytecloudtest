import isObject from "./isObject";
import roundData from "./roundData";

function calculateTotalPrice(data) {
  let result = 0;
  const options = data.options;

  if (data.options) {
    for (let key in options) {
      if (options[key]) {
        if (isObject(data.storageCost)) {
          result = data.storageCost[key] + data.transferCost;
        } else {
          result = data.storageCost + data.transferCost;
        }
      } 
    }
  } else {
    result = data.storageCost + data.transferCost;
  }

  if (data.min && result < data.min) {
    return data.min;
  }
  if (data.max && result > data.max) {
    return data.max;
  }
  return roundData(result);
}

export default calculateTotalPrice;