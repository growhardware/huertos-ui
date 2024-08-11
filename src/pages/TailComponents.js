import React from 'react';
import { useState } from 'react';
import Modal from '../components/dev/Modal';
import componentMapping from '../components/dev/componentMapping';
const style = {
  'text-align': 'center',
};

const verStyle = {
  cursor: 'pointer',
};

export const TailComponents = () => {
  const [showModal, setShowModal] = useState(false);
  const [componentToShow, setComponentToShow] = useState('');
  console.log('tcshowModal ', showModal);
  return (
    <>
      <div style={style}>
        <h3>Tail Components Page</h3>
        {componentMapping.map(({ key, c, componentName, props }) => {
          const comp = c;
          return (
            <>
              {' '}
              <li key={key}>
                {componentName}
                <span
                  style={verStyle}
                  onClick={() => {
                    setShowModal(!showModal);
                    setComponentToShow(componentName);
                  }}
                >
                  {' '}
                  ver
                </span>
              </li>
              {/* {React.createElement(c, { text: 'hola' })} */}
              <div
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <Modal showModal={showModal} component={componentToShow}></Modal>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
