/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './CopieHeader.css';
import { useParams } from 'react-router-dom';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getBill } from '../../redux/selectors/selectors';


interface CopieHeaderProps {

}

const CopieHeader: FC<CopieHeaderProps> = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()
  const bill = useSelector(getBill)

  const handleSetBIllInfo = (e: any) => {
    const { name, value, checked, type } = e.target
    let payloadValue;
    if (type === "checkbox") {
      payloadValue = checked
    } else {
      payloadValue = value
    }
    dispatch({
      type: ADD_TO_BILL,
      key: name,
      unique: true,
      payload: payloadValue

    })

  }

  useEffect(() => {
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
            name="company_type"
            defaultValue={bill.company_type}
            onChange={handleSetBIllInfo}
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
                <input type="checkbox" checked={bill.proforma} onChange={handleSetBIllInfo} name="proforma" id="proforma" />
                <label htmlFor="proforma">proforma</label>
              </div>
              <div className="duplicata flex">
                <input
                  type="checkbox"
                  onChange={handleSetBIllInfo}
                  name="duplicata"
                  id="duplicata"
                  checked={bill.duplicata}
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