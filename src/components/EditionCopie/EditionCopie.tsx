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
import { useSelector } from 'react-redux';
import { getBill } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';


interface EditionCopieProps {
 
}


const EditionCopie : FC<EditionCopieProps> = () =>{

const bill = useSelector(getBill)
const dispatch = useDispatch()
const handleChange = (e:any) =>{
  const {name , value} = e.target
  dispatch({
    type: ADD_TO_BILL,
    key: name,
    unique: true,
    payload: value
    

  })

}

    useEffect(() => {
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div id='pdf-content' className={'EditCopy border-solid relative border-gray-800 border-1 bg-white w-[98%l m-2 px-2 mt-2' +  bill.design_Style.style + "shadow-none"}>
      <CopieHeader/>
      {bill.duplicata && <div className="absolute text-stroke"> duplicata </div>}
      <Informations/>

      <ArticleTable/>
      .  <div className="infosupp">
          <div className="subT">infos supplementaire</div>
          <textarea name="informations" defaultValue={bill.informations} onChange={handleChange} id="info" cols={100} rows={2}></textarea>
        </div>

    </div>
  );
}

export default EditionCopie;