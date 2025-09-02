import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="task-box">
          <h2>{data.title}</h2> <br /> <br />
          <p>{data.description}</p>
          <div className='button-group'>
            <button style={{ backgroundColor: 'red', color: 'white' }}>failed</button>
          </div>
      </div>
  )
}

export default FailedTask