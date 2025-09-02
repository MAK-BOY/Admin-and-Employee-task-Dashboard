import React from 'react'

const Tashlistno = ({data}) => {
  return (
    <div className='boxes'>
       <div className="box">
        <h2> &nbsp;{data.taskStats.newTask}</h2>
        <span>&nbsp;New Task</span>
       </div>
        <div className="box" style={{backgroundColor:"pink"}}>
        <h2>&nbsp;{data.taskStats.active}</h2>
        <span>&nbsp;active task</span>
       </div>
        <div className="box" style={{backgroundColor:"blue"}}>
        <h2>&nbsp;{data.taskStats.completed}</h2>
        <span>&nbsp;completed Task</span>
       </div>
        <div className="box" style={{backgroundColor:"green"}}>
        <h2>&nbsp;{data.taskStats.failed}</h2>
        <span>&nbsp;failed Task</span>
       </div>
    </div>
  )
}

export default Tashlistno