/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './TableFoot.css';
import DetailsAndRegulation from '../DetailsAndRegulation/DetailsAndRegulation';
import TotalAmountDetail from '../TotalAmountDetail/TotalAmountDetail';


interface TableFootProps {
 
}


const TableFoot : FC<TableFootProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="  grid grid-cols-12 ">
      <DetailsAndRegulation/>
      <TotalAmountDetail/>
    </div>
  );
}

export default TableFoot;