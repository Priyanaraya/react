// import React from 'react'

// const Home = () => {
//   return (
//     <div className='container-fluid bg-info vh-100'>
//         <div class='col-2 border'>1</div>
//         <div class='col-2 border'>2</div>
//         <div class='col-2 border'>3</div>
//         <div class='col-2 border'>4</div>
//         <div class='col-2 border'>5</div>
//         <div class='col-2 border'>6</div>
//         </div>
//   )
// }

// export default Home

import React,{useState,useEffect} from 'react'

const input = () => {
  const [value,setvalue] =useState("")

  function empty(e){
    setvalue(e.target.value)
  }

  return (
    <div>
      <input type='text' name='' id='' value={value} onChange={(e)=>{setvalue(e.target.value)}}>
      </input>
    </div>
    <button onClick={empty}>Empty</button>
  )
}

export default input
