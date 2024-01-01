import React from 'react'
import{Results} from './Results'
// import {Search} from './Search';
import {Route,Routes,Navigate} from 'react-router-dom';
export const Routings = () => {
  return (
    <div className="p-4">
   
        <Routes>
         
          <Route exact path="/organicResults" element={<Results/>}/>
          <Route exact path="/images" element={<Results/>}/>
          <Route exact path="/news" element={<Results/>}/>
          <Route exact path="/videos" element={<Results/>}/>


        </Routes>
   
    
    </div>
  );
}
