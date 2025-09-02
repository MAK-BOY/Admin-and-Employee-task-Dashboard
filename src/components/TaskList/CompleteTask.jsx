import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="task-box">
          <h2>{data.title}</h2> <br /> <br />
          <p>{data.description}</p>
          <div className='button-group'>
            <button style={{ backgroundColor: 'green', color: 'white' }}>completed</button>
          </div>
      </div>
  )
}

export default CompleteTask