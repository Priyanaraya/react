// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//   return (
//     <div>
//         <h1>Instagram</h1>
//     <form action="" method="post">
//     <div>
//         <label htmlFor=''>Name</label>
//         <input type="text" name="" id=""/>     
//         </div>
//         <div>
//         <label htmlFor=''>password</label>
//         <input type="text" name="" id=""/>     
//         </div>
//         <div>
//         <label htmlFor=''>Mobile number</label>
//         <input type="text" name="" id=""/>     
//         </div>
//         <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Signup


import React, { useState } from 'react'

const Signup = () => {
  const [Name, setname]= useState("")
  const [Email, setemail]= useState("")
  const [Password, setpassword]= useState("")
  const [Cpassword, setcpassword]= useState("")
       
       const [Store,setstore]= useState([])

       const add = () =>{
        
          setstore([...Store,Name,Email,Password,Cpassword])

        setname("")
        setemail("")
        setpassword("")
        setcpassword("")

    }

  return (
    <div>
      <div className='inner'>
      <input type="text"  value={Name} onChange={(e)=>{setname(e.target.value)}} placeholder='name' /><br />
      <input type="email"  value={Email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email' /><br />
      <input type="password"  value={Password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' /><br />
      <input type="cpassword"  value={Cpassword} onChange={(e)=>{setcpassword(e.target.value)}} placeholder='cpassword' /><br />
      </div>

      <button onClick={add}>Sumbit</button>
    </div>
  )
}

export default Signup
