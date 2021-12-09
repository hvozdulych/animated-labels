import React from "react"
import classNames from "classnames"
import { getRandomValueFromArray } from "../utils"
import { SHAPES } from "../constants"
import { FullName } from "./FullName"
import { AnimatedDetailsInfo } from "./AnimatedDetailsInfo"

const getRandomShape = () => getRandomValueFromArray(SHAPES)

export const TeamMember = ({ data, setHasActive }) => {
  const [shape, setShape] = React.useState()
  const [isActive, setIsActive] = React.useState(false)
  const { firstName, lastName, photo, filterColor, details } = data

  React.useEffect(() => {
    if (isActive) {
      setHasActive(true)
      setShape(getRandomShape())
    } else {
      setHasActive(false)
    }
  }, [isActive])

  const handleMouseEnter = () => setIsActive(true)

  const handleMouseLeave = () => setIsActive(false)

  const containerClassName = classNames("team-member", {
    "is-active": isActive
  })

  return (
    <div className={containerClassName}>
      <FullName
        isActive={isActive}
        firstName={firstName}
        lastName={lastName}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      {shape && (
        <AnimatedDetailsInfo
          photo={photo}
          polygonShape={shape}
          filterColor={filterColor}
          isActive={isActive}
          details={details}
        />
      )}
    </div>
  )
}
