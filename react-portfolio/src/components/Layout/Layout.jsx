import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <App className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </App>
  )
}

const App = styled.div`
  .page {
    width: 100%;
    height: 100%;
    position: absolute;

    .top-tags {
      bottom: auto;
      top: 35px;
    }
    .tags {
      color: #ffd700;
      opacity: 0.6;
      position: absolute;
      bottom: 0;
      left: 120px;
      font-size: 18px;
      font-family: 'La Belle Aurore', cursive;
    }
    .bottom-tag-html {
      margin-left: -20px;
    }
  }
  .container {
    width: 100%;
    will-change: contents;
    height: 90%;
    min-height: 566px;
    position: absolute;
    opacity: 0;
    top: 5%;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
  }
`
