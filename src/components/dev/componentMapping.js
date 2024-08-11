import React from 'react';
import { c1, c2 } from '../dev/ComponentsDevList';
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

export default componentMapping;
