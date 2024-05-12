/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './Informations.css';
import CompanyInformation from '../CompanyInformation/CompanyInformation';
import ClientInformation from '../ClientInformation/ClientInformation';


interface InformationsProps {

}


const Informations: FC<InformationsProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className={`socityAndClientInformation  w-full flex flex-wrap relative justify-between`}>
      <CompanyInformation/>
      <ClientInformation/>

    </div>
  );
}

export default Informations;