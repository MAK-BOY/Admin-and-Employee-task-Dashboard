import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDash from './components/Dashboard/AdminDash'
import Employee from './components/Dashboard/EmployeeDash'
import { Authcontext } from './Context/Authprovider'




const App = () => {
 const [loggedInUser,setloggedInUser]=useState('')
  const [user,setuser] = useState(null)
  const authdata=useContext(Authcontext)
  if(authdata)
  console.log(authdata)

useEffect(() => {
   const loggedInUser = localStorage.getItem('loggedInUser');
   if (loggedInUser) {
     const userdata = JSON.parse(loggedInUser);
     setuser(userdata.role);
     setloggedInUser(userdata.data);
     console.log(userdata);

   }
 },[]);

const handlelogin=(data)=>{
   const {email,password}=data;

   if(email=='admin@me.com' && password=='123'){
    setuser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
   
   }
   else if(authdata ){
    const employee=authdata.employees.find((emp) => emp.email === email && emp.password === password)
    if(employee){
      setuser('employee')
      setloggedInUser(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data: employee }));
    }

   }
   else{
    alert("invalid")
   }
}

  return (
    <div>
      {(!user?<Login  handlelogin={handlelogin} />:
      user === 'admin' ? <AdminDash /> : (user==='employee'?<Employee data={loggedInUser} />:null)
      )}
    </div>
  )
}

export default App