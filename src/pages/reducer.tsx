import { useEffect, useLayoutEffect, useReducer } from 'react';

interface Props {
  count: number;
}
export function Reducer(props: Props) {
  useEffect(() => {
    console.log('子组件effect');
  }, []);
  useLayoutEffect(() => {
    console.log('子组件layout');
  }, []);
  const { count } = props;
  const init = (count: number) => {
    return {
      count,
    };
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return init(action.payload);

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, count, init);
  return (
    <>
      <div className="App">
        count:{state.count}
        <button
          onClick={() => {
            dispatch({ type: 'reset', payload: count });
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
