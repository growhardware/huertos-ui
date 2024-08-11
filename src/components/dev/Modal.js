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
  console.log('c ', props.component);
  // const rennderC = props.ccomponent;
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..{}</p>
        {dynamicComponent(props.component, { text: 'hola' })}
        {/* {React.createElement(JSON.stringify(props.component), { text: 'hola' })} */}
      </div>
    </div>
  );
};

export default function Modal(props) {
  console.log('las props', props.component);
  const component = props.component;
  // const component = React.createElement(props.component, { text: 'hola' });
  // const [showModal, component] = props;
  if (props.showModal) return <ModalComponent component={component} />;
  else return <div></div>;
}
