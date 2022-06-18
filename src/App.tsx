import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Reducer } from './pages/reducer';
function App() {
  const [state, setState] = useState(-1);
  useEffect(() => {
    setState(1);
  }, []);
  console.log('render');
  // useLayoutEffect(() => {
  //   console.log('父组件layout');
  // }, []);
  return (
    <>
      <div>123</div>
    </>
  );
}

export default App;
