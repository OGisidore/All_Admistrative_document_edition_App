/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect, useState } from 'react';
import './ArticleTable.css';
import TableHeader from '../TableHeader/TableHeader';
import ArticleList from '../ArticleList/ArticleList';
import TableFoot from '../TableFoot/TableFoot';


interface ArticleTableProps {

}


const ArticleTable: FC<ArticleTableProps> = () => {
  const [ color ,setColor]= useState<string>("")



  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="ArticleTable mt-7">

      <div className="exucutiveDate">
        <label htmlFor="execution_date"> {' '}  Date d'exécution de la vente ou de la prestation :{' '} </label>
        <input type="text" value={new Date().toLocaleDateString()} name="execution_date" id="execution_date" />
      </div>

      <div className="headColor flex justify-between">
        <div className="ColorBox">
          <label htmlFor="color">Couleur de l'entête du tableau :</label>
          <input type="color" onChange={(e)=>setColor(e.target.value)} name="color" id="color" />
        </div>
        <div className="warning">
          Veuillez utiliser le point au lieu de la virgule pour les nombres.
        </div>
      </div>

      <div className="tables">

        <TableHeader color={color} />
        <ArticleList />
        <TableFoot />

      </div>
    </div>
  );
}

export default ArticleTable;