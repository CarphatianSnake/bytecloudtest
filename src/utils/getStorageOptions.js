import isObject from "./isObject";

function getStorageOptions(data) {
  let result = {};

  if (isObject(data.storage)) {
    Object.keys(data.storage).forEach((item, index) => {
      result = {...result, [item]: !index ? true : false};
    })
  }

  if (Object.keys(result).length > 0) {
    return result;
  }
}

export default getStorageOptions;