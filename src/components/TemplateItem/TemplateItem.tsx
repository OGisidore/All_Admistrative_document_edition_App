/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './TemplateItem.css';
import { Design } from '../../models/Design';


interface TemplateItemProps {
  style : Design
 
}


const TemplateItem : FC<TemplateItemProps> = ({style}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div  className={" w-6 cursor-pointer p-8 " + style.style + " h-10"}> 
      
    </div>
  );
}

export default TemplateItem;