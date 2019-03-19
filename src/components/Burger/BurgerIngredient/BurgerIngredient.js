import React, { Component } from 'react';
import styles from './BurgerIngredient.scss';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    let ingredient = null;

    switch (type) {
      case 'bread-bottom':
        ingredient = <div className={styles.BreadBottom} />;
        break;
      case 'bread-top':
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1} />
            <div className={styles.Seeds2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={styles.Meat} />;
        break;
      case 'cheese':
        ingredient = <div className={styles.Cheese} />;
        break;
      case 'salad':
        ingredient = <div className={styles.Salad} />;
        break;
      case 'bacon':
        ingredient = <div className={styles.Bacon} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

export default BurgerIngredient;
