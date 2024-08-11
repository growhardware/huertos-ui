import React from 'react';
import componentMapping from './componentMapping';

export function dynamicComponent(componentName, props) {
  let cmp;
  componentMapping.forEach((value, i) => {
    if (value.componentName == componentName) cmp = value.c;
  });
  return React.createElement(cmp, props);
}

const ModalComponent = props => {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..{}</p>
        {dynamicComponent(props.component, { text: 'hola' })}
      </div>
    </div>
  );
};

export default function Modal(props) {
  // const component = props.component;
  if (props.showModal) return <ModalComponent component={props.component} />;
  else return <div></div>;
}
