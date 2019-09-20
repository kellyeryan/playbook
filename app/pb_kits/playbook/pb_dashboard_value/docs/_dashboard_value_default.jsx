import React from "react"
import DashboardValue from "../_dashboard_value.jsx"

function DashboardValueDefault() {
  return (
    <div>
      <DashboardValue
          stat_label={{label: "Decreased Value"}}
          stat_value={{value: "1,428", unit: "appts"}}
          stat_change={{change: "decrease", value: "26.1%"}} />

      <br/><br/>

      <DashboardValue
          stat_label={{label: "Increased Value"}}
          stat_value={{value: "938", unit: "homes"}}
          stat_change={{change: "increase", value: "26.1%"}} />

      <br/><br/>

      <DashboardValue
          stat_label={{label: "Neutral Value"}}
          stat_value={{value: "261", unit: "windows"}}
          stat_change={{value: "26.1%"}} />
    </div>
  )
}

export default DashboardValueDefault;
