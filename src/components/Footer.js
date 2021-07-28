import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2021 Rustam Yuburov</p>
      <GithubLink href="https://github.com/RustamYuburov" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Notable', sans-serif;
  background-color: #000};
  color: #FFF};
`

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: #FFF};
  font-size: 1.7rem;
  &:hover {
    color: #FFF};
  }
  &:active {
    color: #FFF};
  }
`

export default Footer