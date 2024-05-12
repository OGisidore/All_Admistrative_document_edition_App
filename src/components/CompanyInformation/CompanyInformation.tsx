/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './CompanyInformation.css';


interface CompanyInformationProps {
 
}


const CompanyInformation : FC<CompanyInformationProps> = () =>{



    useEffect(() => {
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="socityInfo">
    <form className="p-2">
      <div className="previousLogo w-full flex justify-center">
        <img src={""} width={100} alt="" />
      </div>
      <div className="logo_link flex p-[0.2rem]">
        <label htmlFor="logo_link"> Logo : </label>
        <input  type="file" name="logo_link" id="logo" />
      </div>
      <div className="company_name p-[0.2rem]">
        <input type="text" name="company_name"  id="company_name" placeholder="company_name" />
      </div>
      <div className="address p-[0.2rem]">
        <input
        
          type="text"
          name="address"
          id="company_address"
          placeholder="Address"
        />
      </div>
      <div className="socity_city_and_postal_code p-[0.2rem]">
        <input
          type="text"
          name="postal_code"
          
          id="postal_code"
          className="w-[20%] mr-1"
          placeholder="postal_code"
        />
        <input type="text" name="city"   id="SCity" placeholder="city" />
      </div>
      <div className="socityCountry p-[0.2rem]">
        <input
          type="text"
          name="country"
         
          id="country"
          placeholder="Country"
        />
      </div>
      <div className="socityFax p-[0.2rem]">
        <input type="text" name="fax"   id="fax" placeholder="Fax" />
      </div>
      <div className="socityEmail p-[0.2rem]">
        <input type="email"   name="email" id="email" placeholder="email" />
      </div>
      <div className="socity_phone p-[0.2rem]">
        <input
          type="text"
          name="phone"
          id="phone"
          
          placeholder="Phone"
        />
      </div>
      <div className="informations p-[0.2rem]">
        <label htmlFor="informations">Informations : </label>
        <input type="text"   name="rcsVille" id="Rcs"  />
      </div>
    </form>
  </div>
  );
}

export default CompanyInformation;