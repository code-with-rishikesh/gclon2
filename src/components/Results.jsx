import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
        getResults(`${location.pathname}?query=${searchTerm}&num=10&gl=us&hl=en_us&page=0&nfpr=0&device=desktop`);


        
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/organicResults':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.organic_results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({ image, link, title  }, index) => (
            <a href={link} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <img src={image} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
           {results?.news_results?.map(({ rank, imgSrc, snippet,source, title }) => (
             <div key={rank} className="md:w-2/5 w-full ">
               <a href={`https://www.google.com/search?q=${source}`} target="_blank" rel="noreferrer " className="hover:underline ">
                 <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                </a>
                <div className="flex gap-4">
               <a href={`https://www.google.com/search?q=${source}`} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {snippet}</a>
             </div>
             </div>
          ))}
    </div>  
       
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          {results?.video_results?.map(({link, rank}) => (
            <div key={rank} className="p-2">
              <ReactPlayer url={link} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
     );
    default:
      return 'Error...';
  }
};