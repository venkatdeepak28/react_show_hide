// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  trueFalseFirst = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState(prevState => ({firstName: false}))
    } else {
      this.setState(prevState => ({firstName: true}))
    }
  }

  trueFalseLast = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState(prevState => ({lastName: false}))
    } else {
      this.setState(prevState => ({lastName: true}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    let authButtonFirst
    let authButtonLast
    if (firstName === true) {
      authButtonFirst = (
        <div className="box">
          <p>Joe</p>
        </div>
      )
    } else {
      authButtonFirst = <div></div>
    }

    if (lastName === true) {
      authButtonLast = (
        <div className="box">
          <p>Jonas</p>
        </div>
      )
    } else {
      authButtonLast = <div></div>
    }

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button
              className="custom-btn"
              type="submit"
              onClick={this.trueFalseFirst}
            >
              Show/Hide Firstname
            </button>
            {authButtonFirst}
          </div>
          <div>
            <button
              className="custom-btn"
              type="submit"
              onClick={this.trueFalseLast}
            >
              Show/Hide Lastname
            </button>
            {authButtonLast}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
