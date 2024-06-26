import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  withdraw = num => {
    const {cash} = this.state
    if (cash > 0 && cash >= num) {
      this.setState(prev => ({
        cash: prev.cash - num,
      }))
    }
  }

  render() {
    const amount = [50, 100, 200, 500]
    let uniqId = 1
    const {cash} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <div className="username">
            <div className="icon">
              <p>S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="Balance-bag">
            <p className="description">Your Balance</p>
            <div>
              <p className="cash">{cash}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-list">
            {amount.map(element => (
              <DenominationItem
                value={element}
                key={uniqId++}
                func={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
