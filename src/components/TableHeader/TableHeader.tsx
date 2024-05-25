/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './TableHeader.css';
import { useSelector } from 'react-redux';
import { getCompanyType } from '../../redux/selectors/selectors';


interface TableHeaderProps {
  color: string

}


const TableHeader: FC<TableHeaderProps> = ({ color }) => {

  const companyType = useSelector(getCompanyType)


  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (

    <div style={{ backgroundColor: color }} className="TableHeader font-bold grid grid-cols-12" >
      <div className="reference border-[0.1rem] p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">
        Reference
      </div>
      <div className="designation border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3">
        Designation
      </div>
      <div className="quantity border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">
        Quantite
      </div>
      <div className="Unite border-r-[0.1rem] border-y-[0.1rem] border-l-0 border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
        Unité
      </div>
      <div className="unitPrice border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4">
        Prix unitaire HT
      </div>
      <div className="remise border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
        Remise %
      </div>
      <div className="HtAmount border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
        Montant HT
      </div>
      {
        companyType.trim() === "Entreprise avec TVA" && <div className="tva border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
          TVA %
        </div>
      }


      <div className=" bg-white"></div>
      {
        companyType.trim() !== "Entreprise avec TVA" && <div className=" bg-white col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 "></div>
      }
    </div>

  );
}

export default TableHeader;