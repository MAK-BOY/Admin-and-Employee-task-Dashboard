import React, { useContext } from 'react'
import { Authcontext } from '../../Context/Authprovider'
const Alltask = () => {
  const authdata = useContext(Authcontext)
  
  return (
    <div className='all-task'>
       <div className="oo">
          <h3>Name</h3>
          <h3> New Task</h3>
          <h3>Active task</h3>
            <h3>Completed</h3>
          <h3>failed</h3>
        </div>
      {authdata.employees.map((employee, index) => (
        <div className="oo" key={index}>
             <h3>{employee.name}</h3>
          <h3 style={{color:"blue"}}>{employee.taskStats.newTask}</h3>
          <h3 style={{color:"darkblue"}}>{employee.taskStats.active}</h3>
          <h3 style={{color:"green"}}>{employee.taskStats.completed}</h3>
          <h3 style={{color:"red"}}>{employee.taskStats.failed}</h3>
        </div>

      ))}
    </div>
  )
}

export default Alltask