import React, { useState } from 'react';

/*Assets*/
import logo from '../../assets/logo.png';

/*Importación de iconos*/
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
import {CgMenuGridO} from 'react-icons/cg';



export const Navbar = () => {

  //Remover el navbar en pantallas pequeñas con useState
  const [active, setActive] = useState('navBarMenu');

  const showNavbBar = ()=>{
    setActive('navBarMenu showNavbBar')
  }

  const removeNavbBar = ()=>{
    setActive('navBarMenu')
  }

  //Añadir color de fondo al Segundo navBar
  const [noBg, addBg] = useState('navBarTwo');

  const addBgColor = ()=>{
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg');
    }else{
      addBg('navBarTwo');
    }
  }
  window.addEventListener('scroll', addBgColor)
  
  
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon'/>
        </div>

        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon'/> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon'/> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>

      <div className={noBg}>

        <div className="logoDiv">
          <img src={logo} alt="logo" className='Logo'/>
        </div>

        <div className={active}>

          <ul className="menu flex">
            <li onClick={removeNavbBar} className="listItem">Home</li>
            <li onClick={removeNavbBar} className="listItem">About</li>
            <li onClick={removeNavbBar} className="listItem">Offers</li>
            <li onClick={removeNavbBar} className="listItem">Seats</li>
            <li onClick={removeNavbBar} className="listItem">Destinations</li>
          </ul>

          <button onClick={removeNavbBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">
            Contact
          </button>

        <div onClick={showNavbBar} className="toggleIcon">
          <CgMenuGridO className='icon'/>  
        </div>

      </div>
      
    </div>
  )
}

export default Navbar