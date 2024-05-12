/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './EditionCopie.css';
import CopieHeader from '../CopieHeader/CopieHeader';
import Informations from '../Informations/Informations';
import ArticleTable from '../ArticleTable/ArticleTable';


interface EditionCopieProps {
 
}


const EditionCopie : FC<EditionCopieProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div id='pdf-content' className={'EditCopy border-solid border-gray-800 border-1 bg-white w-[98%l m-2 px-2 mt-2'}>
      <CopieHeader/>
      <Informations/>
      <ArticleTable/>
      .  <div className="infosupp">
          <div className="subT">infos supplementaire</div>
          <textarea name="info" id="info" cols={100} rows={2}></textarea>
        </div>

    </div>
  );
}

export default EditionCopie;