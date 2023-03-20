// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import './index.js';

const TwitterBtn = (props) => {
  return (
    <a href="https://twitter.com/intent/tweet" target="_top" id="tweet-quote">
      <button className="social-button" id="twitter-quote">
        <FontAwesomeIcon icon={faTwitter} />
      </button>  
    </a>    
  );
}

const TumblrBtn = () => {
  return (
    <button className="social-button">
      <FontAwesomeIcon icon={faTumblr} />
    </button>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
    this.fetchNewQuoteUsingFx = this.fetchNewQuoteUsingFx.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
  }

  fetchNewQuoteUsingFx() {
    this.changeBackgroundColor()    
    this.changeQuote()
  }

  changeBackgroundColor() {
    var colors = ["red", "orange", "blue", "purple", "green", "black", "teal", "navy", "olive", "maroon", "fuchsia"]
    var randomIndex = Math.floor(Math.random() * colors.length)
    document.documentElement.style.setProperty('--background-color', colors[randomIndex]);
  }
  
  changeQuote() {
    var quoteAuthor = [
      ["There are no traffic jams along the extra mile.", "Roger Staubach"],
      ["Remember no one can make you feel inferior without your consent", "Eleanor Roosevelt"],
      ["Life is what happens to you while you're busy making other plans", "John Lennon"],
      ["Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "Maya Angelou"],
      ["You become what you believe.", "Oprah Winfrey"],
      ["In order to succeed, your desire for success should be greater than your fear of failure.", "Bill Cosby"],
      ["Remember that not getting what you want is sometimes a wonderful stroke of luck.", "Dalai Lama"],
      ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
      ["The person who says it cannot be done should not interrupt the person who is doing it.", "Chinese Proverb"],
      ["Do what you can, where you are, with what you have.", "Teddy Roosevelt"],
      ["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"],
      ["Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", "Johann Wolfgang von Goethe"],
    ];
    var randomIndex = Math.floor(Math.random() * quoteAuthor.length);
    var randomQuote = quoteAuthor[randomIndex];
    this.setState({
      quote: randomQuote[0],
      author: randomQuote[1]
    });
  }

  componentDidMount() {
    this.fetchNewQuoteUsingFx()
  }

  render() {
    return (
      <div className="App">
        <div className="card" id="quote-box">
          <div className="quote-block">
            <div className="quote-block2">
              <i className="fas fa-quote-left"></i>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className="quote-saying" id="text">{this.state.quote}</p>
            </div>                
            <p className="quote-author" id="author">{this.state.author}</p>
          </div>
          <div className="action-row">
            <div className="action-row-social">                    
                <TwitterBtn />
                <TumblrBtn />
            </div>                
            <button className="new-quote-button" id="new-quote" onClick={this.fetchNewQuoteUsingFx}>
              New quote
            </button>
          </div>            
        </div>
        <p className="signature">by Daniel</p>
      </div>
    );
  }
  
}

export default App;
