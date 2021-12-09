import React from "react"
import classNames from "classnames"
import { TeamMember } from "./TeamMember"
import { FILTER_COLORS } from "../constants"
import { getRandomValueFromArray } from "../utils"

export const TeamMembers = ({ data }) => {
  const [hasActive, setHasActive] = React.useState(false)
  const [_data, _setData] = React.useState([])

  React.useEffect(() => {
    if (!data.length) return

    const updatedData = data.map(item => ({
      ...item,
      filterColor: getRandomValueFromArray(FILTER_COLORS)
    }))

    _setData(updatedData)
  }, [data])

  const containerClassName = classNames("team-members-container", {
    "has-active": hasActive
  })

  return (
    <div className={containerClassName}>
      {_data.map(personData => (
        <TeamMember
          data={personData}
          key={`member-${personData.id}`}
          setHasActive={setHasActive}
        />
      ))}
    </div>
  )
}

TeamMembers.defaultProps = {
  data: []
}
