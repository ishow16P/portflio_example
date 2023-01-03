import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatedLetter } from '../AnimatedLetters/AnimatedLetter'
import Loader from 'react-loaders'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(function () {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    // <>
    <Container className="about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetter
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="#026e00" />
          </div>
        </div>
      </div>
    </Container>
    //       <Loader type="pacman"/>
    //     </>
  )
}

const Container = styled.div`
  .stage-cube-cont {
    width: 50%;
    height: 100%;
    top: 0;
    padding-top: 18%;
    margin-left: 0;
    position: absolute;
    right: 0;
    overflow: hidden;
  }
  .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 13s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: calc(50% - 100px);

    div {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      background: rgba(255, 255, 255, 0.4);
      text-align: center;
      font-size: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px 0px lightyellow;
      border-radius: 10px;
    }

    .face1 {
      transform: translateZ(100px);
    }
    .face2 {
      transform: rotateY(90deg) translateZ(100px);
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(100px);
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateX(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`
