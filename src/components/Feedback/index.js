// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isThankYouVisible: false}

  thankYouPage = () => {
    const {isThankYouVisible} = this.state
    this.setState({isThankYouVisible: !isThankYouVisible})
  }

  feedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emojis-container">
            {emojis.map(eachItem => (
              <li key={eachItem.id}>
                <img
                  className="emoji-img"
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  onClick={this.thankYouPage}
                />
                <p>{eachItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  thankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="card-container">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji-img" />
          <h1>Thank You!</h1>
          <div>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isThankYouVisible} = this.state

    return isThankYouVisible ? this.thankYou() : this.feedback()
  }
}

export default Feedback
