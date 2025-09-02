import React from 'react'

const AccceptTask = ({data}) => {
  return (
     <div className="task-box">
          <h2>{data.title}</h2> <br /> <br />
          <p>{data.description}</p>
          <div className='button-group'>
            <button>completed</button><button>failed</button>
          </div>
      </div>
  )
}

export default AccceptTask