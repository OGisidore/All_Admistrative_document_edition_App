/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './TemplateList.css';
import { Design } from '../../models/Design';
import TemplateItem from '../TemplateItem/TemplateItem';
import { templates } from '../../apidata/data';


interface TemplateListProps {

}


const TemplateList: FC<TemplateListProps> = () => {



  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="style flex flex-col items-center">
      <h3>Template de la feuilles | choisir le style ici </h3>
      <div className="TaskStyleList p-5 flex h-28 gap-3 border-solid border-1 border-gray-800 overflow-y-scroll flex-wrap w-[70%]">

        {templates.map((style: Design) => {
          return <TemplateItem key={style._id} style={style} />
        })}

      </div>
    </div>
  );
}

export default TemplateList;