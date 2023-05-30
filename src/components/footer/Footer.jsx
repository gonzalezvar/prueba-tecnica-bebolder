/*Assets*/
import logo from '../../assets/logo.png';
/*Iconos*/
import {TiSocialFacebook} from 'react-icons/ti';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="logo" className="Logo"/>
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillLinkedin className='icon'/>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Flight Status</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Check-In</a>
          </li>
          <li>
            <a href="#">Manage your booking</a>
          </li>

        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>

          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How to</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Baggage</a>
          </li>
          <li>

            <a href="#">Route Map</a>
          </li>
          <li>
            <a href="#">Our Comunities</a>
          </li>

        </div>


      </div>
    </div>
  )
}

export default Footer