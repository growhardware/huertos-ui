import React from 'react';
import DynamicWrapper from '../components/dev/DynamicWrapper.tsx';
const style = {
  'text-align': 'center',
};

export function c1(props) {
  return <div>c1 {props.text}</div>;
}

export function c2(props) {
  return <div>c2 {props.text}</div>;
}

const componentMapping = [
  {
    key: '1',
    c: c1,
    componentName: 'c1',
    props: { text: 'bar' },
  },
  {
    key: '2',
    c: c2,
    // c: () => {
    //   return c2;
    // },
    componentName: 'c2',
    props: { text: 'bar1' },
  },
];

export const TailComponents = () => {
  return (
    <>
      <div style={style}>
        <h3>Tail Components Page</h3>
        {componentMapping.map(({ c, componentName, props }) => {
          // console.log(componentMapping[componentName]);
          return <li>{React.createElement(c, props)}</li>;
          //   return <Component />;
          // return ({React.createElement(cw, { text: 'hola' })});
        })}
      </div>
    </>
  );
};
