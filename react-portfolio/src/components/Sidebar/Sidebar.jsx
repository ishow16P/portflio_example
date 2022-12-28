import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
    <Navbar className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        <span className='sub-logo'>P ツ</span>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.github.com">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </Navbar>
  )
}

const Navbar = styled.div`
  background: #181818;
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  min-height: 500px;

  .logo {
    display: block;
    padding: 8px 0;
    text-decoration: none;
    img {
      display: block;
      margin: 8px auto;
      width: 24px;
      height: auto;

      /* &.sub-logo {
        width: 50px;
        
      } */
    }
    .sub-logo {
      color: #fff;
      display: flex;
      justify-content: center;
      font-family: 'Coolvetica';
      font-weight: 400;
    }
  }

  nav {
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 50%;
    margin-top: -120px;
    width: 100%;

    a {
      font-size: 22px;
      color: #4d4d4e;
      display: block;
      line-height: 51px;
      height: 51px;
      position: relative;
      text-decoration: none;

      i {
        transition: all 0.3s ease-out;
      }

      &:hover {
        color: #ffd700;
        svg {
          opacity: 0;
        }
        &:after {
          opacity: 1;
        }
      }

      &:after {
        content: '';
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        text-align: center;
        opacity: 0;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }

      &:first-child {
        &:after {
          content: 'HOME';
        }
      }
    }

    a.about-link {
      &:after {
        content: 'ABOUT';
      }
    }

    a.contact-link {
      &:after {
        content: 'CONTACT';
      }
    }

    a.portfolio-link {
      &:after {
        content: 'PORTFOLIO';
      }
    }

    a.active {
      svg {
        color: #ffd700;
      }
    }
  }
  ul {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;

    li {
      a {
        padding: 7px 0;
        display: block;
        font-size: 15px;
        line-height: 16px;

        &:hover svg {
          color: #ffd700;
        }
      }
    }
  }
`
