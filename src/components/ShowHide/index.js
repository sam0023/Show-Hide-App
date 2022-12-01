// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isSecond: false}

  firstNameCard = () => {
    this.setState(prev => ({isFirst: !prev.isFirst}))
  }

  secondNameCard = () => {
    this.setState(prev => ({isSecond: !prev.isSecond}))
  }

  render() {
    const {isFirst, isSecond} = this.state
    const firstCardE = (
      <div className="card">
        <p>Joe</p>
      </div>
    )
    const secondCardE = (
      <div className="card">
        <p>Jonas</p>
      </div>
    )
    const x = (
      <div className="bg">
        <h1>Show/Hide</h1>
        <div className="container">
          <div className="c1">
            <button className="btn" onClick={this.firstNameCard} type="button">
              Show/Hide Firstname
            </button>
            {isFirst && firstCardE}
          </div>
          <div className="c1">
            <button className="btn" onClick={this.secondNameCard} type="button">
              Show/Hide Secondname
            </button>
            {isSecond && secondCardE}
          </div>
        </div>
      </div>
    )
    return x
  }
}

export default ShowHide
