import React from "react";
const Login = ({handlelogin}) => {

  const handlesubmit=(Formdata)=>{
     const data=Object.fromEntries(Formdata.entries());
     handlelogin(data)
    }
  return (
    <div style={{
      width:"100%",
      height:"100%",
      justifyContent:"center",
      justifyItems:"center",
      padding:"80px"

    }}>
      <h1>Login Form</h1>
      <form action={handlesubmit} className='login'>
        <input type="email" name="email" placeholder='enter the email'  /> <br /> <br />
         <input type="password" name="password" placeholder='enter the password' /> <br /> <br />
        <button id='btn'>submit</button>
      </form>
    </div>
  )
}

export default Login