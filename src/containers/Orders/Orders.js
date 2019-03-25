import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orders: null,
      error: false,
    };
  }

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(resp => {
        const fetchedOrders = [];
        Object.keys(resp.data).forEach(key => {
          fetchedOrders.push({
            ...resp.data[key],
            id: key,
          });
        });
        this.setState({
          loading: false,
          orders: fetchedOrders,
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true,
        });
        console.log(err);
      });
  }
  render() {
    let orders = <Spinner />;
    if (this.state.orders) {
      orders = this.state.orders.map(order => (
        <Order
          key={order.id}
          price={+order.price}
          ingredients={order.ingredients}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
