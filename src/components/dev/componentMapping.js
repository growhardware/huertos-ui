import React from 'react';
import { c1, c2, c3 } from '../dev/ComponentsDevList';
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
    props: { text: 'bar2' },
  },
  {
    key: '3',
    c: c3,
    // c: () => {
    //   return c3;
    // },
    componentName: 'c3',
    props: { text: 'bar3' },
  },
];

export default componentMapping;
