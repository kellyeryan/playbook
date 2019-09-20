import React from "react"
import DashboardValue from "../_dashboard_value.jsx"

function DashboardValueAlign() {
  return (
    <div>
      <DashboardValue
          stat_label={{label: "Top Title Value"}}
          stat_value={{value: "1,428", unit: "appts"}}
          stat_change={{change: "decrease", value: "26.1%"}} />

      <br/><br/>

      <DashboardValue
          align="center"
          stat_label={{label: "Top Title Value"}}
          stat_value={{value: "1,428", unit: "appts"}}
          stat_change={{change: "decrease", value: "26.1%"}} />

      <br/><br/>

      <DashboardValue
          align="right"
          stat_label={{label: "Top Title Value"}}
          stat_value={{value: "1,428", unit: "appts"}}
          stat_change={{change: "decrease", value: "26.1%"}} />
    </div>
  )
}

export default DashboardValueAlign;
