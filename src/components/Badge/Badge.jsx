import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ values }) => {
  return (
    <>
      {values.map((value) => {
        return (
          <span key={value.id} className="badge">
            {value}
          </span>
        );
      })}
    </>
  );
};

Badge.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
};

export default Badge;
