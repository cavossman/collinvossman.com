// Dependencies
import React from 'react';
import PropTypes from 'prop-types';



// Stateless component / Functional component
const Field = (props) => (
  <div className="form-group">
    <label>{props.label}</label>

    { props.type === 'textarea' &&
      <textarea onChange={props.onChange} value={props.value} />
    }

    { props.type !== 'textarea' &&
      <input
        onChange={ props.onChange }
        type={ props.type }
        value={ props.value }
      />
    }
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};

export default Field;
