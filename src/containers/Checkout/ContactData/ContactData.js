import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: '',
    },
    loading: false,
  };

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Adam Love',
        email: 'test@test.com',
        address: {
          street: '123 Main Street',
          zipCode: '1234',
          country: 'Australia',
        },
        deliveryMethod: 'fastest',
      },
    };

    // NOTE: firebase needs .json
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        console.log(response);
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={styles.Input}
          type="text"
          value=""
          name="name"
          placeholder="Your Name"
        />
        <input
          className={styles.Input}
          type="email"
          value=""
          name="email"
          placeholder="Your Email"
        />
        <input
          className={styles.Input}
          type="text"
          value=""
          name="street"
          placeholder="Street"
        />
        <input
          className={styles.Input}
          type="text"
          value=""
          name="postcode"
          placeholder="PostCode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
