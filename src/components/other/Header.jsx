import React from 'react'

const Header = ({ data }) => {
  const userlogout=()=>{
   localStorage.setItem('loggedInUser','');
   window.location.reload();

  }

  return (
    
           <div className='emp'>
             {/* Using nullish coalescing operator */}
             <h1 className=''>Hello <br /><span>{(data?.name) ?? 'Makboy'}</span></h1> 
             <button onClick={userlogout}>Log out</button>
    </div>
    
  )
}

export default Header