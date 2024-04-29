import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo/Logo';
import './NavBar.css';
import SliderComponent from '../SliderComponent/SliderComponent.jsx'

export default function NavBar() {

  const [btnState, setBtnState] = useState(false);

  function botonMenu() {
    setBtnState(btnState => !btnState)
    if (!btnState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  let toggleClassCheck = btnState ? ' nav-menu-visible' : '';

  return (
    <header className='header'>
      <nav className='nav'>
        <a href='https://pauldamian.xyz' className='logo nav-link'>
          <Logo />
        </a>
        <button className='nav-toggle' onClick={botonMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`nav-menu${toggleClassCheck}`}>
          <li className='nav-menu-item'>
            <a href='#' className='nav-menu-link nav-link'>
              Adoptame
            </a>
          </li>
          <li className='nav-menu-item'>
            <a href='#' className='nav-menu-link nav-link'>
              Protectoras
            </a>
          </li>
          <li className='nav-menu-item'>
            <a href='#' className='nav-menu-link nav-link'>
              Nosotros
            </a>
          </li>
          <li className='nav-menu-item'>
            <a href='#' className='nav-menu-link nav-link'>
              Contacto
            </a>
          </li>
          <li className='nav-menu-item'>
            <a href='#' className='nav-menu-link nav-link nav-menu-link_active'>
              Registro/Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
