import React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'

export function footer(props){
  return (
    <Tabs>
      <Tab label="About" />
      <Tab label="Careers" />
      <Tab label="Help" />
      <Tab label="Privacy" />
      <Tab label="Terms" />
    </Tabs>
  )
}
