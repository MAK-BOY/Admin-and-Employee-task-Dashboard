import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/Alltask'

const AdminDash = () => {
  return (
    <div>
        <Header/>
        <CreateTask/>
        <Alltask/>
    </div>
  )
}

export default AdminDash