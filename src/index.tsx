import React, { FC } from 'react';
import ReactDom from 'react-dom';

import BarTest01 from './test/barChart/test01';
import PolylineTest01 from './test/polylineChart/test01';

const App:FC = () => {
  return (
    <>
      <PolylineTest01 />
      <BarTest01 />
    </>
  )
}

ReactDom.render(
  (<App />),
  document.querySelector('#root')
);
