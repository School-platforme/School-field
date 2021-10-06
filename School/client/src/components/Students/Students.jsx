
import React, { useState, useEffect } from 'react';
import OwnStatistics from './OwnStatistics.jsx';
import SchoolPlateform from './SchoolPlateform.jsx';


export default function Students() {
    const [viewsStudent,useViewS] = useState('main')
   
    useEffect(() => {
      
      const sView = localStorage.getItem('viewsStudent')
        
       useViewS(sView)
      }, [])
       
      useEffect(() => {
        
        localStorage.setItem('viewsStudent',viewsStudent)
      }, [viewsStudent])


    if(viewsStudent === 'main'){
        return (  
            <div>
                <div><button onClick={()=> useViewS('lecture')  }>Lectures</button></div>
                <div><button onClick={()=> useViewS('stat') }  >Notes</button></div>
            </div>
        )
    }
    else if(viewsStudent === 'lecture'){
         return <SchoolPlateform changeView={useViewS} />
    }
    else {
        return <OwnStatistics changeView={useViewS} />
    }

}

