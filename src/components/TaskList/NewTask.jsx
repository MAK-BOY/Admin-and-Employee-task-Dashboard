import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className="task-box">
          <h2>{data.title}</h2> <br /> <br />
          <p>{data.description}</p>
          <div>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Accept Task</button>
          </div>
      </div>
  )
}

export default NewTask