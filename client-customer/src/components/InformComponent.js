import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        {this.context.token === '' ?
          <div><Link className='login' to='/login'>Login</Link>
          <Link className='signup' to='/signup'>Sign-up</Link>
          <Link className='active' to='/active'>Active</Link></div>
          :
          <div>Hello <b>{this.context.customer.name}</b> <Link className='logout' to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> <Link className='profile' to='/myprofile'>My profile</Link> <Link className='order' to='/myorders'>My orders</Link></div>
          }
        </div>
        <div className="float-right">
          <Link className='cart' to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;