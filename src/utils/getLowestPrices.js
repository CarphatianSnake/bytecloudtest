function getLowestPrices(data) {
  const minPrice = data.reduce((acc, item) => item[1] < acc[1] ? item : acc)[1];
  const lowestPrices = data.filter((item) => item[1] <= minPrice);

  return lowestPrices.map((item) => item[0]);
}

export default getLowestPrices;