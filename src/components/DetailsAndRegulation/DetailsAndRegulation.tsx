/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import './DetailsAndRegulation.css';
import { useParams } from 'react-router-dom';
import { discountRates, limitoptions, paymentMode } from '../../Helpers/utilitiesHelpers';


interface DetailsAndRegulationProps {
 
}


const DetailsAndRegulation : FC<DetailsAndRegulationProps> = () =>{

const{slug}=useParams()

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      
          <div className="DetailsAndRegulation col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950">
        <div  className=" cursor-pointer mt-2 flex gap-2 items-center addLineTag">
          <FaPlus/>
          <p>Ajouter une ligne</p>

        </div>
        <div className="addDiscountLIne">
          <input type="checkbox" name="forAddDiscount" id="forAddDiscount" />
          <label htmlFor="forAddDiscount">Ajouter une case Remise globale en dessous de la case Total HT.</label>
        </div>
        <div className="addDepositCase">
          <input type="checkbox"  name="addDeposit" id="addDeposit" />
          <label htmlFor="addDeposit">Ajouter une case Acompte juste au dessus de la case Net à payer.
          </label>
        </div>
        <div className="currencyChoiceCase my-[2rem]">
          <label htmlFor="currencySelect">Symbole, unité ou devise monétaire </label>
          <select name="currencySelect" className='w-[8rem]'  id="currencySelect">
            <option value="usd">usd</option>
            <option value="eur">eur</option>
            <option value="cfa">cfa</option>
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
                      <select name="Date" id="Date">
                        <option value="A La reception">A ne pas preciser</option>
                        <option >Edit Date </option>
                      </select>
                    </div>

                    {/* {
                      editDateInput && <input type="date" name="Date" />
                    } */}
                  </div>

                </li>
              }


              <li>
                <div className="ctn flex gap-2">
                  <div className="selection">
                    <label htmlFor="LimitDate">Date limite : </label>
                    <select name="LimitDate"  id="LimitDate">
                      {
                        limitoptions.map((option, index: number) => {
                          return <option key={index} value={option}>{option}</option>
                        })
                      }
                    </select>
                  </div>
                  {/* {
                    displaylimitDateInput && <input type="date" name="Date" />
                  } */}

                </div>

              </li>
              <li>
                <label htmlFor="mode">Mode : </label>
                <select name="mode" id="mode">
                  {
                    paymentMode.map((mode, index: number) => {
                      return <option key={index} value={mode}>{mode}</option>
                    })
                  }
                </select>
              </li>
              <li>
                <label htmlFor="discountRate">Taux d'escompte en cas de paiement anticipée : </label>
                <select name="discountRate" id="discountRate">
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
                    <select name="anualRatePenality"  id="anualRatePenality">
                      <option value="A La reception">A La reception</option>
                      <option value="A La commande">3 fois le taux legal selon la loi n 2008-776 du 04 aout 2008 </option>
                      <option> saisir un taux</option>

                    </select>
                  </div>
                  {/* {
                    displayRateInput && <> <input type="text" defaultValue={"0.00"} /> % </>
                  } */}

                </div>

              </li>
              <li>

                <label htmlFor="delayIndermnity">En cas de retard de paiement, application d'une indemnité forfaitaire pour frais de recouvrement de 40€ selon l'article D. 441-5 du code du commerce : </label>
                <input type="checkbox" name="delayIndermnity" id="delayIndermnity" /> <span>oui</span>

              </li>
            </ul>
          </div>
        </div>
      </div>
      
  );
}

export default DetailsAndRegulation;