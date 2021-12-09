import React from "react"
import styled, { keyframes, css } from "styled-components"
import { getRandomValueFromArray } from "../utils"

const ANIMATION_OPTIONS = ["TOP_BOTTOM", "BOTTOM_TOP"]

const bottomTopAnimation = keyframes`
    0% { transform: translateY(100%); }
    100% { transform: translateY(0); }
`

const topBottomAnimation = keyframes`
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
`

const MAP_OPTION_TO_KEYFRAMES = {
  TOP_BOTTOM: topBottomAnimation,
  BOTTOM_TOP: bottomTopAnimation
}

const getRandomAnimation = () =>
  MAP_OPTION_TO_KEYFRAMES[getRandomValueFromArray(ANIMATION_OPTIONS)]

const animation = css`
  animation: ${() => getRandomAnimation()} 300ms linear;
  animation-fill-mode: "forwards";
`

const StyledAnimatedLastName = styled.div`
  margin-left: 1rem;
  font-family: "Trump Gothic East Bold", sans-serif;
  display: inline-block;

  ${props => (props.isActive ? animation : "")}
`

export const AnimatedLastName = ({ lastName, isActive }) => (
  <StyledAnimatedLastName className="animated-last-name" isActive={isActive}>
    {lastName}
  </StyledAnimatedLastName>
)
