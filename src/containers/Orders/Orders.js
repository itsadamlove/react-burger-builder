import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    const { loading, orders } = this.props;
    let orderElems = <Spinner />;

    if (!loading) {
      orderElems = orders.map(order => (
        <Order
          key={order.id}
          price={+order.price}
          ingredients={order.ingredients}
        />
      ));
    }
    return <div>{orderElems}</div>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.order.loading,
    orders: state.order.orders,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

Orders.propTypes = {
  loading: PropTypes.bool.isRequired,
  orders: PropTypes.array.isRequired,
  onFetchOrders: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(Orders, axios));
