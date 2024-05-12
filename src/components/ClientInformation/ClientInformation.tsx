/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './ClientInformation.css';
import { useParams } from 'react-router-dom';


interface ClientInformationProps {
 
}


const ClientInformation : FC<ClientInformationProps> = () =>{

const {slug}=useParams()

    useEffect(() => {
      const runLocalData = async () => {

      }
      runLocalData()
    })
    // {proforma && "PROFORMA"}
  return (
    <div className="clientInfo">
    <form className="p-3 flex items-stretch flex-col">
      <div className="facturNumero p-2 sm:w-[100%] md:w-[100%] lg:w-[80%]  self-end">
        <div className="number">
          <label htmlFor="numeroFacture">{slug?.toUpperCase()}  N </label>
          <input
            type="text"
             
            className="w-[50%]"
            name="numeroFacture"
            id="numb_facture"
          />
        </div>
        <div className="emissionDate pt-[0.5rem]">
          <label htmlFor="date_ofEmission"> Date d'emission : </label>
          <input
          value={new Date().toLocaleDateString()}
           
            type="date"
            className="w-[50%]"
            name="date_ofEmission"
            id="date"
          />
        </div>
      </div>
      <div className="clientDes w-[70%] sm:w-[100%] md:w-[100%] lg:w-[80%] flex flex-col items-end p-2 self-end">
        <div className="all w-[100%]">
          <div className="client_code p-[0.2rem]">
            <input
             
              type="text"
              name="client_code"
              id="client_code"
              placeholder="Code client (facultatif)"
            />
          </div>
          <div className="clientFullname p-[0.2rem]">
            <input
              type="text"
               
              name="full_name"
              id="full_name"
              placeholder="Nom et Prenom du client"
            />
          </div>
          <div className="clientAddress p-[0.2rem]">
            <input
              type="text"
               
              name="address"
              id="client_address"
              placeholder="Address du client"
            />
          </div>
          <div className="client_cityAndZIP_code p-[0.2rem]">
            <input
              type="text"
               
              name="postal_code"
              id="postal_code"
              className="w-[20%] mr-1"
              placeholder="code postal"
            />
            <input
              type="text"
               
              name="city"
              id="c_City"
              placeholder="ville"
            />
          </div>

          <div className="clientCountry p-[0.2rem]">
            <input type="text"   name="country" id="country" placeholder="Pays" />
          </div>
          <div className="clientEmail p-[0.2rem]">
            <input
              type="text"
              name="phone"
               
              id="phone "
              placeholder=" telephone"
            />
          </div>
          <div className="clientPhone p-[0.2rem]">
            <input
              type="text"
              name="email"
               
              id="phone "
              placeholder="email"
            />
          </div>
          <div className="clientTva p-[0.2rem]">
            <input
              type="text"
               
              name="tva_number"
              id="c_tva"
              placeholder="Numero TVA  du client ( facultatif)"
            />
          </div>
        </div>
      </div>
      <div className="titleAdInput mt-2">
        <p className="font-bold ">Mettez ici un titre</p>
        <input type="text"   name="Title" id="titleAdd" className="w-[85%]" />
      </div>
    </form>
  </div>
  );
}

export default ClientInformation;