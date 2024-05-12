/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './CopieHeader.css';
import { useParams } from 'react-router-dom';


interface CopieHeaderProps {
 
}


const CopieHeader : FC<CopieHeaderProps> = () =>{
  const { slug } = useParams()



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="header flex flex-col items-center">
    <div className="headerContent p-2 rounded-b-lg   bg-gray-200">
      <div className="modelSelect flex ">
        <label htmlFor="modele">Modele de {slug} : </label>
        <select
          name="modele"
          defaultValue={''}
          
          id="model"
        >
          <option value="Entreprise avec TVA ">
            {' '}
            Entreprise avec TVA{' '}
          </option>
          <option value="Entreprise sans TVA ">
            {' '}
            Entreprise sans TVA{' '}
          </option>
          <option value="Auto-entrepreneur "> Auto-entrepreneur </option>
        </select>
      </div>
      {
        slug === "fature" && <div className="mentionSelect flex ">
          <label htmlFor="mention">Mentions à afficher  : </label>
          <div className="options flex ">
            <div className="proforma flex">
              <input type="checkbox" name="proforma"  id="proforma" />
              <label htmlFor="proforma">proforma</label>
            </div>
            <div className="duplicata flex">
              <input
                type="checkbox"
                
                name="duplicata"
                id="duplicata"
              />
              <label htmlFor="duplicata">duplicata</label>
            </div>
          </div>
        </div>
      }

    </div>
  </div>
  );
}

export default CopieHeader;