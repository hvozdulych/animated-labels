import React from "react"
import { TeamMembers } from "./components/TeamMembers"
import { MOCK_DATA } from "./constants"

function App() {
  return (
    <div className="App">
      <TeamMembers data={MOCK_DATA}/>
    </div>
  )
}

export default App
