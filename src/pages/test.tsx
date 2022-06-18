import { MyContext } from '../utile';
import React from 'react';
import { useContext } from 'react';

export default function Test() {
  const value = useContext(MyContext);
  console.log('test 组件更新了');

  console.log(value);
  return <React.Fragment>test</React.Fragment>;
}
