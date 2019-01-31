import React from 'react';

// Using a functional component as it does not contain it's own state.
const AlertSmall = (props) => {
  return (
    <div className="alert alert-black alert-small" role="alert">
      {props.alert}
    </div>
  );
};

export default AlertSmall;
