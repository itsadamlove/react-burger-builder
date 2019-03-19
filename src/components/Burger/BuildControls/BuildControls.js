import React from 'react';
import styles from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import PropTypes from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchaseable,
  price,
  ordered
}) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>${price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <button
      onClick={ordered}
      className={styles.OrderButton}
      disabled={!purchaseable}
    >
      ORDER NOW
    </button>
  </div>
);

buildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  disabled: PropTypes.object,
  price: PropTypes.number,
  purchaseable: PropTypes.bool,
  ordered: PropTypes.func
};

export default buildControls;
