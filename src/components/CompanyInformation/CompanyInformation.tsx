/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect, useState } from 'react';
import './CompanyInformation.css';
import { getCompany } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';
import InfosSup from '../InfosSup/InfosSup';
import { Information } from '../../models/Information';
import { convertBlobtoUrl, convertFiletoBlob } from '../../Helpers/utilities';


interface CompanyInformationProps {

}


const CompanyInformation: FC<CompanyInformationProps> = () => {

  const dispatch = useDispatch()
  const company = useSelector(getCompany)
  const [url , setUrl]=useState<string>("")

  const handleChange = async (e: any) => {
    const { name, value } = e.target
    if (name === "logo_link") {
      const file = e.target.files[0];
      const blob = await convertFiletoBlob(file)

      console.log(blob);
      const urls = convertBlobtoUrl(blob)
      console.log(urls);
      setUrl(urls)
      
      dispatch({
        type: ADD_TO_BILL,
        key: "company",
        unique: true,
        payload: {
          ...company, [name]: blob

        }

      })
    } else {
      dispatch({
        type: ADD_TO_BILL,
        key: "company",
        unique: true,
        payload: {
          ...company, [name]: value

        }

      })
    }


  }
  const handleChangeInformations = (infos: Information[]) => {
    const newCampany = { ...company, informations: infos }
    dispatch({
      type: ADD_TO_BILL,
      key: "company",
      unique: true,
      payload: {
        ...newCampany

      }

    })
  }
  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="socityInfo">
      <form className="p-2">
        <div className="previousLogo w-full flex justify-center">
          <img src={url} width={100} alt="" />
        </div>
        <div className="logo_link flex p-[0.2rem]">
          <label htmlFor="logo_link"> Logo : </label>
          <input type="file" onChange={handleChange} name="logo_link" id="logo" />
        </div>
        <div className="company_name p-[0.2rem]">
          <input type="text" name="company_name" onChange={handleChange} id="company_name" placeholder="company_name" />
        </div>
        <div className="address p-[0.2rem]">
          <input
            onChange={handleChange}
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
            onChange={handleChange}
            id="postal_code"
            className="w-[20%] mr-1"
            placeholder="postal_code"
          />
          <input type="text" name="city" id="SCity" placeholder="city" />
        </div>
        <div className="socityCountry p-[0.2rem]">
          <input
            type="text"
            name="country"
            onChange={handleChange}
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="socityFax p-[0.2rem]">
          <input type="text" name="fax" onChange={handleChange} id="fax" placeholder="Fax" />
        </div>
        <div className="socityEmail p-[0.2rem]">
          <input type="email" onChange={handleChange} name="email" id="email" placeholder="email" />
        </div>
        <div className="socity_phone p-[0.2rem]">
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
      </form>
        <div className="informations p-[0.2rem]">
          <label htmlFor="informations">Informations : </label>
          <InfosSup
            informations={company.informations}
            handleChangeInformations={handleChangeInformations}
          />

        </div>
    </div>
  );
}

export default CompanyInformation;