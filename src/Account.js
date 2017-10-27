import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);
      this.state = {
        balance: 0
      }
  }


  render() {
    return (
      <div className="account">
        <h2>{this.props.Account}</h2>
          let balanceClass = 'balance';
          if (this.state.balance === 0) {
            balanceClass += ' zero';
          }
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
          handleDepositClick(e) {
            e.preventDefault();
            let amount = this.inputBox.value;
            let newBalance = this.state.balance + amount;
            this.setState({
              balance: newBalance
            })
            this.inputBox.value = '';
          }
        <input type="button" value="Withdraw" />
          handleDepositClick(e) {
            e.preventDefault();
            let amountWithdrawn = this.inputBox.value;
            let balanceRemaining = this.state.balance - amountWithdrawn;
            this.setState({
              balance: newBalance
            })
            this.inputBox.value = '';
          }
      </div>
    )
  }
}
