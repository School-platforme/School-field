import React, { useState } from 'react';
import Lecture from './Lecture.jsx';
import Exercice from './Exercice.jsx';
import Quiz from './Quiz.jsx';




export default function LecturePlateform(props) {
    
      
        return (         
             <div>
                 <p>123</p>
                 <button onClick={()=>props.changeView('lecture')} >Select</button>
             </div>
        )
    

}
