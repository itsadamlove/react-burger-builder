import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.scss';

const checkoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued,
}) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes great!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
        <Button btnType="Danger" clicked={checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={checkoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

checkoutSummary.propTypes = {
  ingredients: PropTypes.object,
  checkoutCancelled: PropTypes.func.isRequired,
  checkoutContinued: PropTypes.func.isRequired,
};

export default checkoutSummary;
