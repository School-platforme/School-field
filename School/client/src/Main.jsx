import React from 'react'

export default function Main(props) {
     
     return (
       <div>
         <div className="nav">

           <span className="logo"
             onClick={() => props.changeView('teacher')}>
             teacher
           </span>
           <span 
             onClick={() => props.changeView('admin')}>
           Admin

           </span>

            

           <span
            
             onClick={() => props.changeView("student")}
           >student</span>
         </div>
         </div>
         )
         
}
