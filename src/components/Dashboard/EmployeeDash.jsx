import React from 'react'
import Tashlistno from '../other/Tashlistno'
import Tasklist from '../TaskList/Tasklist'
import Header from '../other/Header'
const EmployeeDash = ({data}) => {
  return (
    <>
    <div>
    <Header data={data}/>
      <Tashlistno data={data}/>
      <Tasklist data={data}/>
      </div>
    </>
  )
}

export default EmployeeDash