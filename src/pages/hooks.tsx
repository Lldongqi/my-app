import React, { useEffect, useState } from 'react';
import Test from './test';
interface props {
  //   callFn: () => void;
  mooedValue: number;
}
export default React.memo(function Hooks(prop: props) {
  const { mooedValue } = prop;
  const [state, setState] = useState(123);
  console.log('子组件渲染了');
  //   callFn();
  console.log(mooedValue);

  //   useEffect(() => {
  //     console.log('执行了effect');
  //     return () => {
  //       console.log('组件卸载了');
  //     };
  //   });

  return (
    <React.Fragment>
      hooks
      <Test />
    </React.Fragment>
  );
});
