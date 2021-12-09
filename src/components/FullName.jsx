import React from "react"
import styled, { keyframes } from "styled-components"
import { ExpandableImageContainer } from "./AnimatedDetailsInfo"
import { AnimatedLastName } from "./AnimatedLastName"

const zIndexAnimationBlur = keyframes`
  0% {
    opacity: 1;
    z-index: 10;
  }
  99% {
    opacity: 1;
    z-index: 1;
  }
  100% {
    opacity: 0;
    z-index: 0;
  }
`

const zIndexAnimationHover = keyframes`
  0% {
    z-index: 10;
    opacity: 1;
  }
  100% {
    opacity: 1;
    z-index: 10;
}
`

export const FullNameContainer = styled.div`
  opacity: 1;
  transition: opacity 500ms;
  transition-delay: 300ms;

  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 5vw;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  z-index: 2;

  & + ${ExpandableImageContainer} {
    animation: ${zIndexAnimationBlur} 300ms ease-in forwards;
  }

  &:hover + ${ExpandableImageContainer} {
    animation: ${zIndexAnimationHover} 300ms ease-in reverse forwards;
  }
`

const FirstName = styled.div`
  line-height: 1.1;
`

export const FullName = ({
  handleMouseEnter,
  handleMouseLeave,
  isActive,
  lastName,
  firstName
}) => (
  <FullNameContainer
    isActive={isActive}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="full-name-container"
  >
    <FirstName>{firstName}</FirstName>
    <AnimatedLastName lastName={lastName} isActive={isActive} />
  </FullNameContainer>
)
