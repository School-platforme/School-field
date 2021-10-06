import React, { useState, useEffect } from 'react';
import LecturePlateform from './LecturePlateform.jsx';
import Lecture from './Lecture.jsx';
import Exercice from './Exercice.jsx';
import Quiz from './Quiz.jsx';


export default function SchoolPlateform(props) {
    const [lecture, useLecture]= useState(['you','him','all'])
    const [lectureView,useLectureV] = useState('main')

      useEffect(() => {
       
        const sView = localStorage.getItem('lectureView')
        
       useLectureV(sView)
      }, [])
       
      useEffect(() => {
       
        localStorage.setItem('lectureView',lectureView)
      }, [lectureView])

    if(lectureView === 'lecture'){
        return (
            <div>
               <Lecture/>      
               <button onClick={()=> useLectureV('exercices')} >Next</button>
               <button onClick={()=> useLectureV('main')} >Back</button>

            </div>
        )
    }
    else if(lectureView === 'exercices'){
        return (
            <div>
                <Exercice/>
                <button onClick={()=> useLectureV('Quiz')} >Next</button>
                <button onClick={()=> useLectureV('lecture')} >Back</button>
            </div>
        )
    }
    else if (lectureView === 'Quiz'){
        return (
            <div>
                <Quiz/>
                <button onClick={()=> useLectureV('main')} >Submit</button>
                <button onClick={()=>  useLectureV('exercices')} >Back</button>
            </div>
        )
    }else {
    return ( 
        <div>
            {lecture.map((e,k)=> {return <LecturePlateform lecture={e} key={k} changeView={useLectureV} />   }) }
            <button  onClick={()=>{props.changeView('main')}} >Back</button>
        </div>
    )
    }
}
