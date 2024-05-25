/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './ClientInformation.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { getClient, getProforma } from '../../redux/selectors/selectors';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';
import { Information } from '../../models/Information';
import InfosSup from '../InfosSup/InfosSup';


interface ClientInformationProps {

}


const ClientInformation: FC<ClientInformationProps> = () => {

  const { slug } = useParams()
  const dispatch = useDispatch()
  const client = useSelector(getClient)
  const proforma = useSelector(getProforma)


  const handleChange = (e: any) => {
    const { name, value } = e.target
    dispatch({
      type: ADD_TO_BILL,
      key: "client",
      unique: true,
      payload: {
        ...client, [name]: value

      }

    })

  }
  const handleChangeInformations = (infos: Information[]) => {
    const newClient = { ...client, informations: infos }
    dispatch({
      type: ADD_TO_BILL,
      key: "client",
      unique: true,
      payload: {
        ...newClient

      }

    })
  }
  const handleSetBIllInfo = (e: any) => {
    const { name, value } = e.target
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
  // {proforma && "PROFORMA"}
  return (
    <div className="clientInfo">
      <form className="p-3 flex items-stretch flex-col">
        <div className="facturNumero border-solid  border-0 border-l-2 p-2 sm:w-[100%] md:w-[100%] lg:w-[80%]  self-end">
          <div className="number">
            <label htmlFor="bill_number">{slug?.toUpperCase()} {proforma ? "Proforma" : ""}  N° </label>
            <input
              type="text"
              className="w-[50%]"
              name="bill_number"
              id="bill_number"
              onChange={handleSetBIllInfo}
            />
          </div>
          <div className="emissionDate pt-[0.5rem]">
            <label htmlFor="date_ofEmission"> Date d'emission : </label>
            <input
              value={new Date().toLocaleDateString()}
              type="text"
              className="w-[50%]"
              name="date_ofEmission"
              id="date"
            />
          </div>
        </div>
        <div className="clientDes border-solid border-2 rounded-md mt-[1rem] w-[70%] sm:w-[100%] md:w-[100%] lg:w-[80%] flex flex-col items-end p-2 self-end">
          <div className="all w-[100%]">
            <div className="client_code p-[0.2rem]">
              <input
                onChange={handleChange}
                type="text"
                name="client_code"
                id="client_code"
                placeholder="Code client (facultatif)"
              />
            </div>
            <div className="clientCivility p-[0.2rem]">
              <input
                type="text"
                onChange={handleChange}
                name="civility"
                id="civility"
                placeholder="Civility"
              />
            </div>
            <div className="clientFullname p-[0.2rem]">
              <input
                type="text"
                onChange={handleChange}
                name="full_name"
                id="full_name"
                placeholder="Nom et Prenom du client"
              />
            </div>
            <div className="clientAddress p-[0.2rem]">
              <input
                type="text"
                onChange={handleChange}
                name="address"
                id="client_address"
                placeholder="Address du client"
              />
            </div>
            <div className="client_cityAndZIP_code p-[0.2rem]">
              <input
                type="text"
                onChange={handleChange}
                name="postal_code"
                id="postal_code"
                className="w-[20%] mr-1"
                placeholder="code postal"
              />
              <input
                type="text"
                onChange={handleChange}
                name="city"
                id="c_City"
                placeholder="ville"
              />
            </div>

            <div className="clientCountry p-[0.2rem]">
              <input type="text" name="country" id="country" onChange={handleChange} placeholder="Pays" />
            </div>
            <div className="clientEmail p-[0.2rem]">
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                id="phone "
                placeholder=" telephone"
              />
            </div>
            <div className="clientPhone p-[0.2rem]">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                id="phone "
                placeholder="email"
              />
            </div>
            <div className="informations p-[0.2rem]">
              <label htmlFor="informations">Informations : </label>
              <InfosSup
                informations={client.informations}
                handleChangeInformations={handleChangeInformations}
              />
            </div>

          </div>
        </div>
      </form>
      <div className="titleAdInput mt-2">
        <p className="font-bold ">Mettez ici un titre</p>
        <input type="text" onChange={handleSetBIllInfo} name="title" id="titleAdd" className="w-[85%]" />
      </div>
    </div>
  );
}

export default ClientInformation;