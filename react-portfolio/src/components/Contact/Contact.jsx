import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatedLetter } from '../AnimatedLetters/AnimatedLetter'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(function () {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <Container className="contact-page ">
      <div className="text-zone">
        <h1>
          <AnimatedLetter
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact me using below form either.
        </p>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .contact-form {
    width: 100%;
    margin-top: 20px;

    ul {
      padding: 0;
      margin: 0;

      li {
        padding: 0;
        margin: 0;
        list-style: none;
        margin-bottom: 10px;
        opacity: 0;
        overflow: hidden;
        display: block;
        clear: both;
        position: relative;
        animation: fadeInUp 2s 2s;
        animation-fill-mode: forwards;
      }
      li.half {
        width: 49%;
        margin-left: 2%;
        float: left;
        clear: none;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    input[type='text'],
    input[type='email'] {
      width: 100%;
      border: 0;
      background: #115173;
      height: 50px;
      font-size: 16px;
      color: #fff;
      padding: 0 20px;
      box-sizing: border-box;
    }
    textarea {
      width: 100%;
      border: 0;
      background: #115173;
      height: 50px;
      font-size: 16px;
      color: #fff;
      padding: 20px;
      box-sizing: border-box;
      min-height: 150px;
    }
    .flat-button {
        color: #ffd700;
        background: 0 0 ;
        font: 11px;
        letter-spacing: 3px;
        text-decoration: none;
        padding: 8px 10px;
        border: 1px solid #ffd700;
        float: right;
        border-radius: 4px;
    }
  }
`
