import React from "react"
import styled, { keyframes, css } from "styled-components"
import classNames from "classnames"
import { DetailsText } from "./DetailsText"
import distortionImg from "../../src/assets/images/distortion3.png"

/* copy-pasted values from original */
const distortionAnimation = keyframes`
  0% { transform: translate3d(0,9rem,0) }
  10% { transform: translate3d(-1rem,-4rem,0) }
  20% { transform: translate3d(-8rem,2rem,0) }
  30% { transform: translate3d(9rem,-9rem,0) }
  40% { transform: translate3d(-2rem,7rem,0) }
  50% { transform: translate3d(-9rem,-4rem,0) }
  60% { transform: translate3d(2rem,6rem,0) }
  70% { transform: translate3d(7rem,-8rem,0) }
  80% { transform: translate3d(-9rem,1rem,0) }
  90% { transform: translate3d(6rem,-5rem,0) }
  100% { transform: translate3d(-7rem,0,0) }
`
/* end copy-pasted from original */

const getInitialPolygonShape = polygon =>
  polygon
    .split(", ")
    .map(() => "50% 50%")
    .join(", ")

const makeCSSablePolygon = shape => css`polygon(${shape})`

const animateClipPath = (start, end) => keyframes`
  0% { clip-path: ${makeCSSablePolygon(start)} }
  100% { clip-path: ${makeCSSablePolygon(end)}; }
`

export const ExpandableImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: -250px;
  right: 20%;
  z-index: 0;
`

const RandomShape = styled.div`
  width: 100%;
  height: 100%;

  animation: ${props => animateClipPath(props.min, props.max)} 300ms ease-in;
  will-change: animation;
  transform-origin: center center;
  animation-fill-mode: forwards;

  &.faded {
    animation: ${props => animateClipPath(props.max, props.min)} 300ms ease-in;
    will-change: animation;
    transform-origin: center center;
    animation-fill-mode: forwards;
  }
`

const DistortionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${distortionImg});
  animation: ${distortionAnimation} 1s steps(2) infinite;
`

const ColorFilter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(${props => props.filterColor});
`

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AnimatedDetailsInfo = ({
  isActive,
  polygonShape,
  photo,
  filterColor,
  details
}) => {
  const minPolygonShape = getInitialPolygonShape(polygonShape)
  const shapeClassName = classNames("clip-path", { faded: !isActive })

  return (
    <ExpandableImageContainer className="expandable-image-container">
      <RandomShape
        className={shapeClassName}
        min={minPolygonShape}
        max={polygonShape}
      >
        <DistortionOverlay className="distortion-overlay" />
        <ColorFilter filterColor={filterColor} />
        <StyledImg className="image" src={photo} alt="photo" />
      </RandomShape>
      <DetailsText details={details} />
    </ExpandableImageContainer>
  )
}
