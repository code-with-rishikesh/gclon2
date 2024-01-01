import React from 'react'
import {Link} from 'react-router-dom';
import {Search} from './Search';
export const Navbar= ({darkTheme,setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className ="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
        <div className="flex items-center rounded-full bg-gray-200 p-4 dark:bg-gray-500">
  <span className="text-blue-500 text-2xl rounded font-bold dark:text-gray-900">G</span>
  <span className="text-red-500 text-2xl rounded font-bold dark:text-gray-900">o</span>
  <span className="text-yellow-500 text-2xl rounded font-bold dark:text-gray-900">o</span>
  <span className="text-blue-500 text-2xl rounded font-bold dark:text-gray-900">g</span>
  <span className="text-green-500 text-2xl rounded font-bold dark:text-gray-900">l</span>
  <span className="text-red-500 text-2xl rounded font-bold dark:text-gray-900">y🔎</span>
</div>

        </Link>
        <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl- dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
            {darkTheme?'Light💡':'Dark🌙'}
        </button>
        </div> 
        <Search/>
    </div>
  );
}





