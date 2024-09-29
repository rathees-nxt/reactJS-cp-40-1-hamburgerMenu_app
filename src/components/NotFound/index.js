// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <Header />
    <div className="notfound-content">
      <div className="content-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="notfound-img"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="para">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
