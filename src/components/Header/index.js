// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  const onClickHamberg = () => (
    <button
      type="button"
      data-testid="hamburgerIconButton"
      className="close-btn"
    >
      <GiHamburgerMenu size={30} />
    </button>
  )

  const onClickClose = () => (
    <button type="button" data-testid="closeButton" className="close-btn">
      <IoMdClose size={30} />
    </button>
  )

  return (
    <div className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
        <Popup
          modal
          trigger={open => (
            <button className="button" type="button">
              {open ? onClickClose() : onClickHamberg()}
            </button>
          )}
        >
          {close => (
            <ul className="nav-link-list" height={100}>
              <li>
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome size={35} />
                  <p className="para">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill size={35} />
                  <p className="para">About</p>
                </Link>
              </li>
            </ul>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default withRouter(Header)
