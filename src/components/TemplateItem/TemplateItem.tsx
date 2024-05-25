/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './TemplateItem.css';
import { Design } from '../../models/Design';
import { useDispatch } from 'react-redux';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';


interface TemplateItemProps {
  style : Design
 
}


const TemplateItem : FC<TemplateItemProps> = ({style}) =>{
  const dispatch = useDispatch()

const handleAddDesign = ()=>{
  dispatch({
    type: ADD_TO_BILL,
    key: "design_Style",
    unique: true,
    payload: style

  })
}

    useEffect(() => {
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div onClick={handleAddDesign}  className={" w-6 cursor-pointer p-8 " + style.style + " h-10"}> 
      
    </div>
  );
}

export default TemplateItem;