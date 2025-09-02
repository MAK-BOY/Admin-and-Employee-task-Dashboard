import React from 'react'
import AccceptTask from './AccceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const Tasklist = ({data}) => {
  return (
    <div className='task'>
      
      {data.tasks.map((elem,index)=>{
        if(elem.active){
          return <AccceptTask key={index} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={index} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={index} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={index} data={elem}/>
        }
      })}
      
      
      

    </div>
  )
}

export default Tasklist