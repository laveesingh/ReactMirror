import React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'

export function footer(props){
  return (
    <Tabs value={0} onChange={() => console.log("Footer tab clicked")}>
      <Tab label="About" />
      <Tab label="Careers" />
      <Tab label="Help" />
      <Tab label="Privacy" />
      <Tab label="Terms" />
    </Tabs>
  )
}
