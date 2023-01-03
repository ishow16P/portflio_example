import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimatedLetter } from '../AnimatedLetters/AnimatedLetter'
import { Logo } from './Logo/Logo'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'u',
    't',
    'e',
    'e',
    ' ',
    'M',
    'a',
    'h',
    'a',
    'w',
    'i',
    's',
    'e',
    't',
    's',
    'i',
    'l',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(function () {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <Container className="container">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetter
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetter
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Full Developer /JavaScript / Nodejs / Angular</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </Container>
  )
}

const Container = styled.div`
  .text-zone {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    max-height: 90%;
  }
  h1 {
    color: #fff;
    font-size: 53px;
    margin: 0;
    font-family: 'Coolvetica';
    font-weight: 400;

    &:before {
      content: '<h1>';
      font-family: 'La Belle Aurore';
      color: #ffd700;
      font-size: 18px;
      position: absolute;
      margin-top: -48px;
      left: 15px;
      opacity: 0.6;
    }
    &:after {
      content: '<h1>';
      font-family: 'La Belle Aurore';
      color: #ffd700;
      font-size: 18px;
      position: absolute;
      margin-top: 18px;
      margin-left: 20px;
      animation: fadeIn 1s 1.7s backwards;
      opacity: 0.6;
    }
    img {
      width: 32px;
      margin-left: 20px;
      opacity: 0;
      height: auto;
      animation: rotateIn 1s linear both;
      animation-delay: 1.4s;
    }
  }

  h2 {
    color: #8d8d8d;
    margin-top: 20px;
    font-weight: 400;
    font-size: 11px;
    font-family: sans-serif;
    letter-spacing: 3px;
    animation: fadeIn 1s 1.8s backwards;
  }

  .flat-button {
    color: #ffd700;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 4px;
    font-family: sans-serif;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid #ffd700;
    margin-top: 25px;
    float: left;
    animation: fadeIn 1s 1.8s backwards;
    white-space: nowrap;

    &:hover {
      background: #ffd700;
      color: #333;
      transition: 0.3s ease-in-out;
    }
  }
`
