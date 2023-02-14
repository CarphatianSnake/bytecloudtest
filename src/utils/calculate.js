import { dataKeys } from "../slices/pricesSlice";
import isObject from "./isObject";
import data from "../assets/data/data";

function calculate(input, unit) {

  return dataKeys.reduce((acc, item) => {

    const providerData = data[item];
    const providerPrices = providerData[unit];
    const freeSpace = providerData.free ? providerData.free[unit] : 0;
    let result = {};

    const calcPrice = (price, freeSpace) => {
      if (input > freeSpace) {
        return (input - freeSpace) * price;
      }
      return 0;
    };

    if (isObject(providerPrices)) {
      
      if (isObject(providerPrices)) {
        for (let key in providerPrices) {
          const free = isObject(freeSpace) ? freeSpace[key] : freeSpace;
          result = {...result, [key]: calcPrice(providerPrices[key], free)}
        }
      }

    } else {
      result = calcPrice(providerPrices, freeSpace);
    }

    return {...acc, [item]: result};

  }, {});

}

export default calculate;