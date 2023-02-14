import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataKeys, setTotalPrice } from '../../slices/pricesSlice';
import GraphicElement from './GraphicElement/GraphicElement';
import calculateTotalPrice from '../../utils/calculateTotalPrice';

import './Graphics.scss';

function Graphics() {
  const data = useSelector((state) => state.prices);
  const dispatch = useDispatch();

  useEffect(() => {
    const pricesArray = dataKeys.map((item) => {
      return [item, calculateTotalPrice(data[item])]
    })
    dispatch(setTotalPrice(pricesArray));

    // eslint-disable-next-line
  }, [data])

  const elements = dataKeys.map((item) => {
    return (
      <GraphicElement
        key={item}
        providerName={item}
      />
    );
  });

  return (
    <ul className="graphics-wrapper">
      {elements}
    </ul>
  )
}

export default Graphics;