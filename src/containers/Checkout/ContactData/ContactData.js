import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: '',
    },
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
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
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
