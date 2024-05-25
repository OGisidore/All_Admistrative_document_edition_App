/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './DetailsAndRegulation.css';
import { useParams } from 'react-router-dom';
import { currencys, discountRates, limitoptions, paymentMode } from '../../Helpers/utilitiesHelpers';
import { useDispatch } from 'react-redux';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';
import { generateID } from '../../Helpers/utilities';
import { getRegulation } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';


interface DetailsAndRegulationProps {

}


const DetailsAndRegulation: FC<DetailsAndRegulationProps> = () => {

  const [editDateInput, setEditDateInput] = useState<boolean>(false)
  const [displaylimitDateInput, setDisplaylimitDateInput] = useState<boolean>(false)
  const [displayRateInput, setDisplayRateInput] = useState<boolean>(false)
  const dispatch = useDispatch()
  const regulation = useSelector(getRegulation)

  const handleAddArticle = () => {

    dispatch({
      type: ADD_TO_BILL,
      key: "article_lists",
      unique: false,
      payload: {
        _id: generateID(),
        reference: '',
        designation: "",
        quantity: 0,
        unit: "",
        unit_price: 0,
        discount: 0,
        amount_ht: 0,
        tva_rate: 0,
        amount_ttc: 0,
        created_at: new Date()
      }

    })
  }

  const { slug } = useParams()
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

  const handleChange = (e: any) => {
    const { name, value, checked, type } = e.target
    let payloadValue;
    if (type === "checkbox") {
      payloadValue = checked
    } else {
      payloadValue = value
    }
    if (value.trim() === "Saisir une date") {
      if (name === "date") {
        setEditDateInput(!editDateInput)
      } 
      if (name === "limit_date"){
        setDisplaylimitDateInput(!displaylimitDateInput)
      }
      payloadValue = new Date().toLocaleDateString()
      


    } 
    // else{
    //   if (name === "date") {
    //     setEditDateInput(false)
    //   } 
    //   if (name === "limit_date"){
    //     setDisplaylimitDateInput(false)
    //   }
    // }
    if (value.trim() === "Saisir un taux") {
      setDisplayRateInput(!displayRateInput)
      payloadValue = 0
    }
    dispatch({
      type: ADD_TO_BILL,
      key: "regulation",
      unique: true,
      payload: {
        ...regulation, [name]: payloadValue

      }

    })

  }

  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (

    <div className="DetailsAndRegulation col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950">
      <div
        onClick={handleAddArticle} className=" cursor-pointer mt-2 flex gap-2 items-center addLineTag">
        <FaPlus />
        <p>Ajouter une ligne</p>

      </div>
      <div className="addDiscountLIne">
        <input type="checkbox" onChange={handleSetBIllInfo} name="add_deposit" id="add_deposit" />
        <label htmlFor="forAddDiscount">Ajouter une case Remise globale en dessous de la case Total HT.</label>
      </div>
      <div className="addDepositCase">
        <input type="checkbox" onChange={handleSetBIllInfo} name="Add_discount" id="Add_discount" />
        <label htmlFor="Add_discount">Ajouter une case Acompte juste au dessus de la case Net à payer.
        </label>
      </div>
      <div className="currencyChoiceCase my-[2rem]">
        <label htmlFor="currencySelect">Symbole, unité ou devise monétaire </label>
        <select name="currency" onChange={handleSetBIllInfo} className='w-[8rem]' id="currencySelect">
          <option value="CFA">CFA</option>
          {
            currencys.map((currency, index: number) => {
              return <option key={index} value={currency.code}>{currency.code} ( {currency.symbole} )</option>
            })
          }

        </select>
      </div>
      <div className="reglement my-[1rem] border-[.1rem] border-solid border-gray-950 relative">
        <div className="title absolute top-[-0.5rem] left-[0.5rem] px-[0.5rem]  bg-white ">Reglement</div>
        <div className="element relative">
          <ul className="list-disc">
            {
              slug === "fature" && <li >
                <div className="ctn flex gap-2">
                  <div className="select">
                    <label htmlFor="Date">Date  : </label>
                    <select name="date"  onChange={handleChange} id="Date">
                      <option value="undefined">A ne pas preciser</option>
                      <option value={"Saisir une date"} >Saisir une date </option>
                    </select>
                  </div>

                  {
                    editDateInput && <input onChange={handleChange} type="date" name="date" />
                  }
                </div>

              </li>
            }


            <li>
              <div className="ctn flex gap-2">
                <div className="selection">
                  <label htmlFor="LimitDate">Date limite : </label>
                  <select name="limit_date" onChange={handleChange} id="LimitDate">
                    {
                      limitoptions.map((option, index: number) => {
                        return <option key={index} value={option}>{option}</option>
                      })
                    }
                  </select>
                </div>
                {
                  displaylimitDateInput && <input onChange={handleChange} type="date" name="limit_date" />
                }

              </div>

            </li>
            <li>
              <label htmlFor="Payment_method">Mode : </label>
              <select name="Payment_method" onChange={handleChange} id="mode">
                {
                  paymentMode.map((mode, index: number) => {
                    return <option key={index} value={mode}>{mode}</option>
                  })
                }
              </select>
            </li>
            <li>
              <label htmlFor="discountRate">Taux d'escompte en cas de paiement anticipée : </label>
              <select name="discount_rate" onChange={handleChange} id="discountRate">
                <option value="Ne pas preciser"> Ne pas preciser</option>
                <option value="Neant"> Neant </option>
                {
                  discountRates.map((rate) => {
                    return <option key={rate._id} value={rate.value}> {rate.value} </option>
                  })
                }
              </select>
            </li>
            <li>
              <div className="ctn 'flex gap-2'">
                <div className="selectRate">
                  <label htmlFor="anualRatePenality">Taux annuel de pénalité en cas de retard de paiement : : </label>
                  <select name="latePayment_penality_rate" onChange={handleChange} id="latePayment_penality_rate">
                    <option value="A La reception">A La reception</option>
                    <option value="3x le taux">3 fois le taux legal selon la loi n 2008-776 du 04 aout 2008 </option>
                    <option value="Saisir un taux">Saisir un taux</option>

                  </select>
                </div>
                {
                    displayRateInput && <> <input type="text" name="latePayment_penality_rate" onChange={handleChange} defaultValue={"0.00"} /> % </>
                  }

              </div>

            </li>
            <li>

              <label htmlFor="delayIndermnity">En cas de retard de paiement, application d'une indemnité forfaitaire pour frais de recouvrement de 40€ selon l'article D. 441-5 du code du commerce : </label>
              <input type="checkbox" onChange={handleChange} name="latePayment_penality_feeclause" id="delayIndermnity" /> <span>oui</span>

            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default DetailsAndRegulation;